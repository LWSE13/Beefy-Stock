const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const supplierRoutes = require('./supplier-routes');
const userRoutes = require('./user-routes');

router.use('/categories', categoryRoutes);
console.log("hello");
router.use('/products', productRoutes);
router.use('/supplier', supplierRoutes);
router.use('/users', userRoutes);


module.exports = router;
