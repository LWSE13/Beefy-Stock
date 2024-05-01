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

  router.get('/search', async (req, res) => {
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

  module.exports = router;