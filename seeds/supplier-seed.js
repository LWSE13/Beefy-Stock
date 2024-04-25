const { Supplier } = require('../models');

// Define sample supplier data
const suppliersData = [
    
      {
        supplier_name: "Michael Wilson",
        supplier_address: "210 Cedar Street, Glasgow, Scotland",
        supplier_phone: "+44 141 6543 2109",
        supplier_email: "michael.wilson@example.com"
      },
      {
        supplier_name: "Sophia Evans",
        supplier_address: "543 Walnut Street, Edinburgh, Scotland",
        supplier_phone: "+44 131 4321 0987",
        supplier_email: "sophia.evans@example.com"
      },
      {
        supplier_name: "Daniel Patel",
        supplier_address: "876 Ash Street, Cardiff, Wales",
        supplier_phone: "+44 29 8765 4321",
        supplier_email: "daniel.patel@example.com"
      },
      {
        supplier_name: "Jessica Hughes",
        supplier_address: "109 Cherry Street, Belfast, Northern Ireland",
        supplier_phone: "+44 28 7654 3210",
        supplier_email: "jessica.hughes@example.com"
      },
      {
        supplier_name: "Liam Thomas",
        supplier_address: "432 Chestnut Street, Swansea, Wales",
        supplier_phone: "+44 1792 123456",
        supplier_email: "liam.thomas@example.com"
      },
      {
        supplier_name: "Amelia Clark",
        supplier_address: "765 Sycamore Street, Aberdeen, Scotland",
        supplier_phone: "+44 1224 654321",
        supplier_email: "amelia.clark@example.com"
      },
      {
        supplier_name: "Thomas Murphy",
        supplier_address: "98 Oak Street, Dundee, Scotland",
        supplier_phone: "+44 1382 987654",
        supplier_email: "thomas.murphy@example.com"
      },
      {
        supplier_name: "Emily Baker",
        supplier_address: "321 Elm Street, Newport, Wales",
        supplier_phone: "+44 1633 876543",
        supplier_email: "emily.baker@example.com"
      },
      {
        supplier_name: "Harry O'Sullivan",
        supplier_address: "654 Maple Street, Londonderry, Northern Ireland",
        supplier_phone: "+44 28 7123 4567",
        supplier_email: "harry.osullivan@example.com"
      },
      {
        supplier_name: "Ella Walsh",
        supplier_address: "987 Pine Street, Limerick, Northern Ireland",
        supplier_phone: "+44 28 7134 5678",
        supplier_email: "ella.walsh@example.com"
      },
      {
        supplier_name: "William O'Brien",
        supplier_address: "210 Cedar Street, Galway, Northern Ireland",
        supplier_phone: "+44 28 7145 6789",
        supplier_email: "william.obrien@example.com"
      },
      {
        supplier_name: "Poppy Ryan",
        supplier_address: "543 Walnut Street, Cork, Northern Ireland",
        supplier_phone: "+44 28 7156 7890",
        supplier_email: "poppy.ryan@example.com"
      },
      {
        supplier_name: "Jack Nolan",
        supplier_address: "876 Ash Street, Waterford, Northern Ireland",
        supplier_phone: "+44 28 7167 8901",
        supplier_email: "jack.nolan@example.com"
      },
      {
        supplier_name: "Ava Kelly",
        supplier_address: "109 Cherry Street, Dublin, Northern Ireland",
        supplier_phone: "+44 28 7178 9012",
        supplier_email: "ava.kelly@example.com"
      },
      {
        supplier_name: "Noah Byrne",
        supplier_address: "432 Chestnut Street, Wexford, Northern Ireland",
        supplier_phone: "+44 28 7189 0123",
        supplier_email: "noah.byrne@example.com"
      },
];

// Define a function to seed the database with suppliers
const seedSuppliers = async () => {
  await Supplier.bulkCreate(suppliersData);
};

module.exports = seedSuppliers;
