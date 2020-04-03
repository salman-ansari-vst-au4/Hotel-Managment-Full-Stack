const Menu = require('../Model/Menu');
const express = require("express");
const router = express.Router();

// Create Operation
router.post('/write', async (req, res) => {
  try {
    const { body } = req;
    let table = await Menu.create(body);
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
    let table = await Menu.findAll();
    // let table = await Menu.findAll({ attributes: ['name'] }); //for select query
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
    let table = await Menu.update(body, { where: { id: params.id } });
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

    let table = await Menu.destroy({ where: { id: params.id } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;