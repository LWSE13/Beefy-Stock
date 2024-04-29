const Product = require('./Product');
const Category = require('./Category');
const Supplier = require('./Supplier');

// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: 'category_id'});
// Categories have many Products
Category.hasMany(Product, {foreignKey: 'category_id'});

Product.belongsTo(Supplier, {foreignKey: 'supplier_id'});

Supplier.hasMany(Product, {foreignKey: 'supplier_id'});

module.exports = {
  Product,
  Category,
  Supplier
};
