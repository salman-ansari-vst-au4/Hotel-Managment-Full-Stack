const Waiter = require('../Model/Waiter');
const express = require("express");
const router = express.Router();

// Create Operation
router.post('/write', async (req, res) => {
  try {
    const { body } = req;
    let table = await Waiter.create(body);
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
    let table = await Waiter.findAll();
    // let table = await Waiter.findAll({ attributes: ['name'] }); //for select query
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
    let table = await Waiter.update(body, { where: { id: params.id } });
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

    let table = await Waiter.destroy({ where: { id: params.id } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;