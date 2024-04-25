const router = require('express').Router();
const { Product, Category } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["category_name"]
        },

        // include supplier model, attributes we need are supplier_name
      ]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          attributes: ["category_name"]
        },

        // include supplier model, attributes we need are supplier_name


      ]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product


// update product


router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id,)

    if (!productData) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(`Record deleted successfully! `);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
