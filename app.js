var express = require('express');
var app = express();

app.use(express.static('public'));


app.get('/', function(request, response) {
    response.send('Testing');
});

app.listen(3000, function() {
    console.log('Client connected on 3000');
});