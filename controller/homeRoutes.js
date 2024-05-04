const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Product, Category, Supplier } = require('../models');
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

  router.get('/search', withAuth, async (req, res) => {
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
      const product = await Product.findByPk(req.params.id, {
        include: [
          {
            model: Category,
            attributes: ['category_name']
          },
          {
            model: Supplier,
            attributes: ['id','supplier_name', 'supplier_address', 'supplier_phone', 'supplier_email']
          }
        ]
      
      });
      if (product) {
        console.log(product.get({ plain: true }));
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

  router.put('/api/suppliers/:id', withAuth, async (req, res) => {
    try {
      await Supplier.update({
        supplier_name: req.body.supplierName,
        supplier_email: req.body.supplierEmail,
        supplier_phone: req.body.supplierPhone,
        supplier_address: req.body.supplierAddress
      }, {
        where: { id: req.params.id }
      });
  
      res.json({ message: 'Update successful' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong!' });
    }
  });

  router.put('/api/products/:id', withAuth, async (req, res) => {
    try {
      await Product.update({
        product_name: req.body.productName,
        description: req.body.productDescription,
        price: req.body.productPrice,
        in_hand_stock: req.body.inHandStock,
      }, {
        where: { id: req.params.id }
      });
  
      res.json({ message: 'Update successful' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong!' });
    }
  });
  router.get('/products', withAuth, async (req, res) => {
    try {
      const allproducts = await Product.findAll();
      res.render('allproducts', {
        allproducts: allproducts.map(product => product.get({ plain: true })),
        loggedIn: req.session.loggedIn,
        name: req.session.name
       });

    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'An error occurred while fetching products' });
    }     
  });
  module.exports = router;