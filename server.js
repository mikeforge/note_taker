const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001

//init express
const app = express();


//making use of express middleware functions
app.use(express.json()); //interact with json 
app.use(express.static('public')); //making public accessible

//setup for routes


