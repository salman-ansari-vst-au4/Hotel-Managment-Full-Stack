const Bill = require('../Model/Bill');
const Menu = require('../Model/Menu');
const Waiter = require('../Model/Waiter');
const Table = require('../Model/Table');
const BillMenu = require('../Model/BillMenu');
const express = require("express");
const router = express.Router();

// Create Operation
router.post('/write', async (req, res) => {
  try {
    const { body } = req;
    let table = await Bill.create(body);
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
    let table = await Bill.findAll();
    // let table = await Table.findAll({ attributes: ['name'] }); //for select query
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
    let table = await Bill.update(body, { where: { id: params.id } });
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

    let table = await Bill.destroy({ where: { id: params.id } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Join Operation
// router.get('/join', async (req, res) => {
//   try {
//     let table = await Bill.findAll({
//       include: [{
//         model: Table,
//       },
//       {
//         model: Waiter
//       },
//       {
//         model: Menu
//       }]
//     })
//     res.json({
//       table
//     })
//   } catch (error) {
//     res.json({
//       error
//     })
//   }
// })

router.get('/join', async (req, res) => {
  try {
    let table = await Bill.findAll({
      include: [{
        model: Table,
      },
      {
        model: Waiter
      },
      {
        model: BillMenu,
        include: [{
          model: Menu
        }]
      }]
    })
    res.json({
      table
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

router.get('/joining/:id', async (req, res) => {
  try {
    const { id } = req.params
    let table = await Bill.findOne({
      where: {
        id
      },
      include: [{
        model: Table,
      },
      {
        model: Waiter
      },
      {
        model: BillMenu,
        include: [{
          model: Menu
        }]
      }]
    })
    res.json({
      table
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

module.exports = router;