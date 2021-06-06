// Dependencies
const path = require('path');
const fs = require('fs');
const app = require('express');
const uniqid = require('uniqid');


module.exports = (app) => {

// Read File
const notes = fs.readFileSync(path.join(__dirname,'./db/db.json'));


// Updated Database
const updateDatabase = storeData => {
    fs.writeFile('./db/db.json', JSON.stringify(storeData, '\t'), err => {
        if (err){
            console.log (err);
            return;
        } else {
           console.log('Successfully updated your notes.') 
        }
    });
}

// GET ROUTE sets up the route for notes then reads the json file and returns saved notes
app.get('../public/notes.html', (req, res) => {
    res.json(storeData)
});

// POST ROUTE sets up the route to post notes
app.post('../public/notes.html', async (req, res) => {
    // Passes new note to json and then returns the note
    let newNote = await {id:uniqid(), title: req.body.title, text: req.body.text}
    storeData.push(newNote);
    updateDatabase();
    return console.log('Successfully added note: '`${newNote.title}`);
});

// GET REQUEST retrieves a note via its specific id
app.get('../public/notes.html/:id', (req, res) => {
    res.json(storeData[req.params.id]);
});


// DELETE REQUEST deletes a specified note via its id
app.delete('../public/notes.html/:id', (req, res) => {
    notes.splice(req.params.id, 1);
    updateDatabase();
    console.log('Successfully deleted note '`${req.params.id}`);
});


};
