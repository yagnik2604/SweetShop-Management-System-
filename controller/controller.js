const Sweet = require("../models/Sweet-model");


// controller for add items
exports.addSweet = async (req, res) => {
  try {

    const { id, name, category, price, quantity } = req.body;
   
    const exists = await Sweet.findOne({ id });
    
    //if sweet already exist
    if (exists) return res.status(400).json({ message: "Sweet exists" });
    
    const sweet = await Sweet.create({ id, name, category, price, quantity });

    res.status(201).json(sweet);

  } catch (err) {
     console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getSweet = async (req, res)=>{
    
    const sweets = await Sweet.find();
    if(sweets.length === 0) return res.status(404).json({message: "not found"});
    
     res.status(200).json({ message: sweets });

    //  res.render("index", { sweets });

}
