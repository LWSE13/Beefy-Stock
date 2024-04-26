const router = require('express').Router();
const { Product, Category, Supplier } = require('../../models');

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

        {
          model: Supplier,
          attributes: ["supplier_name"]
        }
      ]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json({message: 'an error occured while fetching the data', error: err.message});
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

        {
          model: Supplier,
          attributes: ["supplier_name"]
        }


      ]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const productData = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});


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
