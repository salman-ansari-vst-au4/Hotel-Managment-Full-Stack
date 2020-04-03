const BillMenu = require('../Model/BillMenu');
const express = require("express");
const router = express.Router();

// Create Operation
router.post('/write', async (req, res) => {
  try {
    const { body } = req;
    let table = await BillMenu.create(body);
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Read Operation
router.get('/read', async (req, res) => {
  try {
    let table = await BillMenu.findAll();
    // let table = await BillMenu.findAll({ attributes: ['name'] }); //for select query
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Update Operation
router.put('/update/:id', async (req, res) => {
  try {
    const { params, body } = req;
    let table = await BillMenu.update(body, { where: { id: params.id } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Delete Operation
router.delete('/delete/:id', async (req, res) => {
  try {
    const { params } = req;

    let table = await BillMenu.destroy({ where: { id: params.id } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;