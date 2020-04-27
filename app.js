const path = require('path');
const express = require("express");
const app = express();
const pug = require('pug');
const favicon = require('serve-favicon');


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.use(favicon(path.join(__dirname, 'public',  'img', 'favicon.png')));




app.get("/", function(request, response) {
    response.render('index', {title: 'JSTUBE | Index Page'})
});

app.listen(3000);

