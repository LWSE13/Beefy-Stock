const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const supplierRoutes = require('./supplier-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/supplier', supplierRoutes);

module.exports = router;
