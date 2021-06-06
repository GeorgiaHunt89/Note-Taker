// Dependencies
const path = require('path');
const fs = require('fs');
const app = require('express');

module.exports = (app) => {

 // Get route index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));   

// GET route to notes.html
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

// Default to homepage route
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

// Get route for Json saved notes
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, './db/db.json')));

};