const { Category } = require('../models');

// Define sample category data
const categoriesData = [
  {
    
    category_name: "Throw Pillows"
  },
  {
  
    category_name: "Furniture"
  },
  {

    category_name: "Home Decor"
  },
  {

    category_name: "Lighting"
  },
  {

    category_name: "Rugs & Carpets"
  },
  {

    category_name: "Kitchen & Dining"
  }
];

// Define a function to seed the database with categories
const seedCategories = async () => {
  await Category.bulkCreate(categoriesData);
};

// Export the seed function
module.exports = seedCategories;
