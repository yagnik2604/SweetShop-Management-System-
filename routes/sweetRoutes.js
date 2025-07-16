const express = require('express');
const router = express.Router();

const {
  addSweet,
  getSweet

} = require('../controller/controller');



router.post('/addSweet', addSweet);
router.get('/', getSweet);






module.exports = router;