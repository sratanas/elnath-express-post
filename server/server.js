//variable settings should always be at the top
var express = require('express'); //whatever express has in module.exports
var bodyParser = require('body-parser');
var quotes_data = require('./modules/quotes-data');
var reallyGreat = require('./routes/really-great');
var index = require('./routes/index');
var quote = require('./routes/quote');
//looks by default in the node module, for our own things we need the ./
var app = express(); //an instance of an express web app
//creates an instance of express
// var appTwo = express(); BAD PRACTICE but could create a second web app
var port = 5000;
//better practice to create a variable. You can use anything between 0000 and 9999 but
//at prime we use 5000. It's like a channel or a socket on your computer.
//one application can be on one port at a time.

console.log('starting up the server');

app.use(express.static('server/public'));
//makes a lot of those choices for us to send static files
app.use(bodyParser.urlencoded({ extended: true }));
//middleware, going to run on every single request
//this creates rec.body

//app.get first
app.get('/', index);
//cannot send two responses. ONE request and ONE response.
//if no response, it just keeps loading forever until timeout.

app.get('/great', reallyGreat);


//We want /quote/random will res.send a random quote
// we want /quote/first will res.send the first quote
//can't do with a get request because it only gets an exact match
//we want both of the above to go to below, so we use .use
//Now we want /quote will res.send "you can find quotes on /quotes/random or /quote/first"
app.use('/quote', quote);

app.use('/dinosaur', function(req, res){
    res.send('ROAR!!!');
})

app.listen (port, function(){
    console.log('listening on port', port);
    
})
//only going to respond to get requests. / is base route, anything 
//you can't just send back a number 
