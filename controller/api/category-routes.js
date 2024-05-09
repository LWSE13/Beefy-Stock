const router = require('express').Router();
const { Category, Product } = require('../../models');
const withAuth = require('../../utils/auth');

// The `/api/categories` endpoint

router.get('/', withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: {
        model: Product,
        attributes: ['product_name']
      }
    });
    res.status(200).json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'An error occurred while fetching categories', error: err.message});
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: {
        model: Product,
        attributes: ['product_name']
      }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'An error occurred while fetching the category', error: err.message});
  }
});

router.post('/', withAuth,  async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json({ message: 'Data successfully written', categoryData });
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'An error occurred while creating the category', error: err.message});
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Data successfully updated', categoryData });
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'An error occurred while updating the category', error: err.message});
  }
});

router.delete('/:id', withAuth,  async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Data successfully deleted', categoryData });
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'An error occurred while deleting the category', error: err.message});
  }
});

module.exports = router;
