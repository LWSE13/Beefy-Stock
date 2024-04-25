const seedCategories = require('./category-seed');
const seedProducts = require('./product-seed');
const seedSuppliers = require('./supplier-seed');
const sequelize = require('../config/connection');
// function to seed the database
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedSuppliers();
    console.log('\n----- Suppliers SEEDED -----\n');

    
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');
  
    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');
  
  
   
  
    process.exit(0);
  };
// Call the seedAll function to start seeding the database
seedAll();