// require('dotenv').config();
// const path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
//     const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);
// const port = process.env.PORT || 4000
// app.listen(port, console.log(`http://localhost:${port}`));

require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error"); // Make sure this is implemented correctly
const adminRoutes = require("./routes/admin"); // Ensure these route files are correct
const shopRoutes = require("./routes/shop"); // Ensure these route files are correct

const app = express();

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// 404 error handler
app.use(errorController.get404);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
