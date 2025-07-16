const express = require('express');
const router = express.Router();

const {
  addSweet,

} = require('../controller/controller');



router.post('/addSweet', addSweet);





module.exports = router;