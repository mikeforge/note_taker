const express = require('express');
const path = require('path');
const fs = require('fs');
const file = require('./db/db.json');

const port = process.env.PORT || 3001

//init express
const app = express();

app.listen(port, () =>
console.log(`App is running at http://localhost:${port}`)
);

//making use of express middleware functions
app.use(express.json()); //interact with json 
app.use(express.static('public')); //making public accessible

//setup for api routes

app.get('/api/notes', (req,res) => {
    let rawJson = fs.readFileSync('./db/db.json');
    console.log(rawJson)
    console.log(JSON.parse(rawJson))
})

app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let note = req.body;
        console.log(`this is the req.body: ${req.body}`);
        file.push(note);

        fs.writeFile('./db/db.json', JSON.stringify(file), err => {
            if (err) throw err;
            console.log(`success on writing new note`);
        })
    });
});




//html routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

