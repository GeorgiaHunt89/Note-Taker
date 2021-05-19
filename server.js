// Dependencies
const express = require('express');

const app = express();

// Setting initial port
const PORT = process.env.PORT || 2222;

// Allow data parsing for Express
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// Added Listener for PORT
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});