// Dependencies
const path = require('path');
const app = require('express');

module.exports = (app) => {

// GET route to notes.html
app.get('./assets/js/notes.html', (req, res) => {res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Get route index.html
app.get('./assets/js/index.html', (req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Default to homepage route
app.get('*', (req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'));
});

};