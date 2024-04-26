//supplier routes
const router = require('express').Router();
const { Supplier, Product } = require('../../models');

//get all suppliers
router.get('/', async (req, res) => {

  try {
    const supplierData = await Supplier.findAll({
      include: {
        model: Product,
        attributes: ['product_name']
      }
    });

    res.status(200).json(supplierData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching suppliers', error: err.message });
  }
});

//get one supplier
router.get('/:id', async (req, res) => {

  try {
    const supplierData = await Supplier.findByPk(req.params.id, {
      include: {
        model: Product,
        attributes: ['product_name']
      }
    });

    if (!supplierData) {
      res.status(404).json({ message: 'No supplier found with this id!' });
      return;
    }

    res.status(200).json(supplierData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching the supplier', error: err.message });
  }
});

//create a new supplier
router.post('/', async (req, res) => {

  try {
    const supplierData = await Supplier.create(req.body);

    res.status(200).json({ message: 'Data successfully written', supplierData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while creating the supplier', error: err.message });
  }
});

//update a supplier
router.put('/:id', async (req, res) => {

  try {
    const supplierData = await Supplier.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!supplierData[0]) {
      res.status(404).json({ message: 'No supplier found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Data successfully updated', supplierData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while updating the supplier', error: err.message });
  }
});

//delete a supplier
router.delete('/:id', async (req, res) => {

  try {
    const supplierData = await Supplier.findByPk(req.params.id);

    if (!supplierData) {
      res.status(404).json({ message: "No supplier found with this id!" });
      return;
    }

    await Supplier.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(`Record deleted successfully! `);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while deleting the supplier", error: err.message });
  }
});

module.exports = router;