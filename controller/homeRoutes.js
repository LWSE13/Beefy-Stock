const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Product } = require('../models');
const { Op } = require('sequelize');

router.get('/', (req, res) => {
  const loggedIn = req.session.loggedIn || false; // Check if user is logged in
  const name = req.session.name || ''; // Get the name from session or set it to an empty string
  
  res.render('homepage', { loggedIn, name }); // Pass the loggedIn and name variables to the template
});
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      
      return;
    }
    res.render('login');
  });

  router.get('/search', withAuth, async (req, res) => {
    const searchQuery = req.query.productSearch;
    const products = await Product.findAll({
        where: {
          product_name: {
                [Op.iLike]: '%' + searchQuery + '%'
            }
        }
    });
    res.render('search', { products: products.map(product => product.get({ plain: true })) });
  });

  //get product by id (for use when clicking on a product in the search results)
  router.get('/products/:id', withAuth, async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.render('products', { product: product.get({ plain: true }) });
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong!');
    }
});

  module.exports = router;