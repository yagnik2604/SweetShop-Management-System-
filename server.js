require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const connectDb = require("./config/db-connection");
connectDb();

    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running on http://localhost:${process.env.PORT}`);
    });

