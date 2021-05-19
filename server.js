// Dependencies
const express = require('express');

const app = express();

// Setting initial port
const PORT = process.env.PORT || 2222;




// Added Listener for PORT
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});