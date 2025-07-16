const express = require('express');
const app = express();
const sweetRoutes = require('./routes/sweetRoutes');
const path = require("path");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/sweets', sweetRoutes);





module.exports = app;
