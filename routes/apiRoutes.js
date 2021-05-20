// Dependencies to hold and save data
const storeData = require('..db/storeData');
const app = require('express');

module.exports = (app) => {

// GET request
app.get('/api/notes', (req, res) => {res.json(storeData)});

// POST request
app.post('api/notes', (req, res) => {
    storeData
    .addNote(req.body)
    .then((noteData) => res.json(noteData))
    .catch(err => res.status(400).send('The note is not correctly formatted and cannot be saved'));
    });


// DELETE request
app.delete('api/notes/:id', (req, res) => {
    storeData
    .deleteData(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(400).send('There is an error deleting this note'));
});

};