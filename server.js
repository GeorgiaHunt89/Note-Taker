// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

// Setting up the express port
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));


// Allow data parsing for Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ROUTES for HTML and API
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);


// Added Listener for PORT
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});