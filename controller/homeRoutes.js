const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Product } = require('../models');
const { Op } = require('sequelize');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    // If user is logged in, render the dashboard
    const name = req.session.name || ''; // Get the name from session or set it to an empty string
    res.render('dashboard', { loggedIn: true, name });
  } else {
    // If user is not logged in, render the homepage
    res.render('homepage', { loggedIn: false, name: '' }); // Pass loggedIn as false and an empty name
  }
});


  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      
      return;
    }
    res.render('login');
  });

  router.get('/search', async (req, res) => {
    const searchQuery = req.query.productSearch;
    const products = await Product.findAll({
      where: {
        product_name: {
          [Op.iLike]: '%' + searchQuery + '%'
        }
      }
    });
    console.log(products);
    res.render('search', { 
      products: products.map(product => product.get({ plain: true })),
      loggedIn: req.session.loggedIn,
      name: req.session.name
    });
  });
  
  router.get('/products/:id', withAuth, async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        res.render('products', { 
          product: product.get({ plain: true }),
          loggedIn: req.session.loggedIn,
          name: req.session.name
        });
      } else {
        res.status(404).send('Product not found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Something went wrong!');
    }
  });

  module.exports = router;