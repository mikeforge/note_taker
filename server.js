const express = require('express');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3001

//init express
const app = express();

app.listen(port, () =>
console.log(`App is running at http://localhost:${port}`)
);

//making use of express middleware functions
app.use(express.json()); //interact with json 
app.use(express.static('public')); //making public accessible

//setup for routes

app.get('/api/notes', (req,res) => {
    let rawJson = fs.readFileSync('./db/db.json');
    console.log(rawJson)
    console.log(JSON.parse(rawJson))
})
