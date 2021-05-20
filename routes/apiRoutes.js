// Dependencies
const path = require('path');
const fs = require('fs');
const app = require('express');


module.exports = (app) => {

// Read File
const storeData = data => {
fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(err);

// Updated Database
const updateDatabase = data => {
    fs.writeFile('db/db.json', JSON.stringify(storeData, '\t'), err => {
        if (err){
            console.log (err);
            return;
        } else {
           console.log('Successfully updated your notes.') 
        }
    });
}

// GET request
app.get('/api/notes', (req, res) => {res.json(storeData)
});

// POST request
app.post('/api/notes', (req, res) => {
    let addNote = req.body;
    storeData.push(addNote);
    updateDatabase();
    return console.log('Successfully added note: '`${addNote.title}`);
});

// GET request for specific id
app.get('/api/notes/:id', (req, res) => {
    res.json(storeData[req.params.id]);
});


// DELETE request
app.delete('/api/notes:id', (req, res) => {
    storeData.spice(req.params.id, 1);
    updateDatabase();
    console.log('Successfully deleted note '`${req.params.id}`);
});

});
};
}
