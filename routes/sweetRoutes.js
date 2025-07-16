const express = require('express');
const router = express.Router();

const {
  addSweet,
  getSweet,
  editSweet,
  purchaseSweet

} = require('../controller/controller');



router.post('/addSweet', addSweet);
router.get('/', getSweet);
router.put('/editSweet/:id', editSweet);
router.patch('/purchase/:id', purchaseSweet);







module.exports = router;