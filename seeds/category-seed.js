const { Category } = require('../models');


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


const seedCategories = async () => {
  await Category.bulkCreate(categoriesData);
};


module.exports = seedCategories;
