const express = require('express');
const app = express();
const sweetRoutes = require('./routes/sweetRoutes');
const path = require("path");
const methodOverride = require("method-override");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use('/api/sweets', sweetRoutes);





module.exports = app;
