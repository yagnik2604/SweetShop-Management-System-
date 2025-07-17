const express = require("express");
const router = express.Router();
const Sweet = require('../models/Sweet-model')

const {
  addSweet,
  getSweet,
  editSweet,
  purchaseSweet,
} = require("../controller/controller");

router.post("/addSweet", addSweet);
router.get("/", getSweet);
router.put("/editSweet/:id", editSweet);
router.patch("/purchase/:id", purchaseSweet);

// renderthe addDweet ejs page
router.get("/add", (req, res) => {
  res.render("addSweet");
});


// render edit page with selected product
router.get("/edit/:id", async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);
    res.render("editSweet", { sweet });
  } catch (err) {
    console.error("Edit Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});



module.exports = router;
