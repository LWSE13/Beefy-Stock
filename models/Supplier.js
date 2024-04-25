// Supplier model. We could use the information from this model to create a page in which the user can see more info about a products supplier.
// The user experience would consist of: Clicking on a product > being taken to a page with more info about the product > and then clicking on the supplier Button
//to be taken to a page with more info about the supplier.
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Supplier extends Model {}

Supplier.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    supplier_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    supplier_address: {
      type: DataTypes.STRING,
      allowNull: false
    },

    supplier_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },

    supplier_email: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
    // future fields could include assosiated products in which the user could see all the products that the supplier provides.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'supplier',
  }
);

module.exports = Supplier;