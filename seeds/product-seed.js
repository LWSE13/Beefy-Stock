const { Product } = require('../models');

// Define sample product data
const productsData = [
  
    {
        product_name: "Throw Pillow",
        description: "Decorative throw pillow with a geometric pattern, perfect for adding a pop of color to any sofa or bed.",
        price: 19.99,
        in_hand_stock: 50,
        category_id: 1,
        supplier_id: 1
      },
      {
        product_name: "Dining Table",
        description: "Solid wood dining table with a modern design, comfortably seating six people.",
        price: 299.99,
        in_hand_stock: 20,
        category_id: 2,
        supplier_id: 2
      },
      {
        product_name: "Wall Mirror",
        description: "Large wall mirror with a distressed wooden frame, adding a touch of rustic charm to any room.",
        price: 89.99,
        in_hand_stock: 30,
        category_id: 3,
        supplier_id: 3
      },
      {
        product_name: "Table Lamp",
        description: "Elegant table lamp with a ceramic base and linen shade, providing soft and warm lighting for reading or relaxing.",
        price: 49.99,
        in_hand_stock: 40,
        category_id: 4,
        supplier_id: 4
      },
      {
        product_name: "Sofa",
        description: "Comfortable sofa upholstered in durable fabric, featuring a reversible chaise for versatile seating arrangements.",
        price: 599.99,
        in_hand_stock: 15,
        category_id: 2,
        supplier_id: 5
      },
      {
        product_name: "Area Rug",
        description: "Soft and plush area rug with a modern abstract design, adding warmth and style to any room.",
        price: 129.99,
        in_hand_stock: 25,
        category_id: 5,
        supplier_id: 6
      },
      {
        product_name: "Bookshelf",
        description: "Sturdy bookshelf with adjustable shelves, perfect for organizing and displaying books, photos, and decor.",
        price: 79.99,
        in_hand_stock: 35,
        category_id: 3,
        supplier_id: 7
      },
      {
        product_name: "Cookware Set",
        description: "Complete cookware set featuring pots, pans, and utensils, made from durable stainless steel.",
        price: 129.99,
        in_hand_stock: 20,
        category_id: 6,
        supplier_id: 8
      },
      {
        product_name: "Throw Blanket",
        description: "Cozy throw blanket made from soft and breathable cotton, perfect for snuggling up on chilly evenings.",
        price: 29.99,
        in_hand_stock: 50,
        category_id: 1,
        supplier_id: 9
      },
      {
        product_name: "Coffee Table",
        description: "Modern coffee table with a sleek glass top and geometric metal base, adding contemporary flair to any living room.",
        price: 149.99,
        in_hand_stock: 20,
        category_id: 2,
        supplier_id: 10
      },
      {
        product_name: "Wall Art",
        description: "Abstract canvas wall art featuring vibrant colors and textured brushstrokes, creating a focal point in any room.",
        price: 39.99,
        in_hand_stock: 30,
        category_id: 3,
        supplier_id: 11
      },
      {
        product_name: "Dinnerware Set",
        description: "Elegant dinnerware set for four, featuring delicate floral patterns and scalloped edges, perfect for special occasions.",
        price: 59.99,
        in_hand_stock: 25,
        category_id: 6,
        supplier_id: 12
      },
      {
        product_name: "Throw Pillow Set",
        description: "Set of two decorative throw pillows with a bohemian-inspired print, adding texture and warmth to any sofa or chair.",
        price: 24.99,
        in_hand_stock: 40,
        category_id: 1,
        supplier_id: 13
      },
      {
        product_name: "Desk",
        description: "Compact desk with a built-in storage shelf, perfect for small home offices or study nooks.",
        price: 79.99,
        in_hand_stock: 20,
        category_id: 2,
        supplier_id: 14
      },
      {
        product_name: "Floor Lamp",
        description: "Sleek and modern floor lamp with an adjustable spotlight, providing focused task lighting for reading or crafting.",
        price: 69.99,
        in_hand_stock: 30,
        category_id: 4,
        supplier_id: 15
      }

];

// Define a function to seed the database with products
const seedProducts = async () => {
  await Product.bulkCreate(productsData);
};

module.exports = seedProducts;
