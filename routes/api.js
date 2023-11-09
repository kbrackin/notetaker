const express = require('express');
const fs = require(`fs`);
const app = express();

app.use(express.json());

const savedNotes = require('../db/db.json');

app.get('/notes', (req, res) => {
    res.json(savedNotes)
})

app.post('/notes', (req, res) => {
    let createNote = req.body;
    createNote.id = savedNotes.length + 1

    savedNotes.push(createNote)

    fs.writeFile('./db/db.json', JSON.stringify(savedNotes), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('New note created successfully!')
        }
    })
    res.json(savedNotes)
})

module.exports = app