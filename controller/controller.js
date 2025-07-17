const Sweet = require("../models/Sweet-model");

// controller for add items
exports.addSweet = async (req, res) => {
  try {
    const { id, name, category, price, quantity } = req.body;

    const exists = await Sweet.findOne({ id });

    //if sweet already exist
    if (exists) return res.status(400).json({ message: "Sweet exists" });

    const sweet = await Sweet.create({ id, name, category, price, quantity });

    // res.status(201).json(sweet);
     
      res.redirect("/api/sweets");

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


// get all sweet controlller 
exports.getSweet = async (req, res) => {
  try {
    const sweets = await Sweet.find();

    if (sweets.length === 0)

      return res.status(404).json({ message: "not found" });

    // res.status(200).json({ message: sweets }); // response for test 
  
    res.render("index", { sweets }); // render home page with sweet data 


  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


// edit sweet controller 
exports.editSweet = async (req, res) => {
  try {
    const { name, category, price, quantity } = req.body;

    const sweet = await Sweet.findOneAndUpdate(
      { id: Number(req.params.id) },
      { name, category, price, quantity },
      { new: true }
    );

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    res.status(200).json({ message: sweet });
  } catch (error) {
    console.error("Edit Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


// purchase sweet controller 
exports.purchaseSweet = async (req, res) => {
  try {
    const { amount } = req.body;

    const sweet = await Sweet.findOne({ id: req.params.id });

    if (!sweet) return res.status(404).json({ message: "Not found" });

    if (sweet.quantity < amount)
      return res.status(400).json({ message: "Insufficient stock" });
    sweet.quantity -= amount;
    await sweet.save();

    res.json({ message: "Purchased", sweet });

  } catch (err) {

     console.error("Edit Error:", error);
    res.status(500).json({ message: "Server Error" });

  }
};
