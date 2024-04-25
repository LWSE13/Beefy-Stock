//supplier routes
const router = require('express').Router();
const { Supplier, Product } = require('../../models');

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
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
    try {
      const supplierData = await Supplier.findByPk(req.params.id, {
        include: {
          model: Product,
          attributes: ['product_name']
        }
      });
      res.status(200).json(supplierData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const supplierData = await Supplier.create({
        supplier_name: req.body.supplier_name
      });
      res.status(200).json({ message: 'Data successfully written', supplierData, });
    }catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const supplierData = await Supplier.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      if (!supplierData[0]) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
      res.status(200).json({ message: 'Data successfully updated', supplierData, });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const supplierData = await Supplier.destroy({
        where: {
          id: req.params.id
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });