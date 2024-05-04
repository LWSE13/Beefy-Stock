// server/routes/api/lowQuantityRoutes.js

const router = require('express').Router();
const { Op } = require('sequelize');
const { Product, Supplier } = require('../../models'); // Import your Product and Supplier models
const withAuth = require('../../utils/auth');

// Route to fetch low quantity products
router.get('/', withAuth, async (req, res) => {
  try {
    // Query the database to find products with low quantities, including supplier information
    const lowQuantityProducts = await Product.findAll({ 
      where: { in_hand_stock: { [Op.lt]: 30 } },
    });
    
    // Send the low quantity products as JSON response
    res.status(200).json(lowQuantityProducts);
  } catch (error) {
    console.error('Error fetching low quantity products:', error);
    res.status(500).json({ error: 'An error occurred while fetching low quantity products' });
  }
});

module.exports = router;
