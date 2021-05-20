// Dependencies
const express = require('express');

const app = express();

// Setting initial port
const PORT = process.env.PORT || 3000;

// Allow data parsing for Express
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

// ROUTES for HTML and API
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);


// Added Listener for PORT
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});