const express = require('express');
const router = express.Router();

const {
  addSweet,
  getSweet,
  editSweet

} = require('../controller/controller');



router.post('/addSweet', addSweet);
router.get('/', getSweet);
router.put('/editSweet/:id', editSweet);







module.exports = router;