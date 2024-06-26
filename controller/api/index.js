const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const supplierRoutes = require('./supplier-routes');
const userRoutes = require('./user-routes');
const quantityRoutes = require('./lowQuantity-routes')

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/supplier', supplierRoutes);
router.use('/users', userRoutes);
router.use('/low-quantity-products', quantityRoutes);

module.exports = router;
