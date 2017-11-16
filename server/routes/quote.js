var express = require('express');
var quotesData = require('../modules/quotes-data')
var router = express.Router();

var routeCounter = 0;


router.get('/random', function (req, res) {
    routeCounter++;
    console.log('This route has been hit', routeCounter,'times');
    var randomNumber = Math.floor(Math.random() * quotesData.length);
    res.send(quotesData[randomNumber]);
    // res.sendStatus(500); //even if things go wrong you should still 
    //send back a response.Uncomment this line to send back an error.
});

router.get('/first', function (req, res) {
    res.send(quotesData[0]);
});

router.get('/', function (req, res){
    res.send("You can find quotes on /quotes/random or /quote/first");    
})

router.get('/all', function (req, res){
    res.send(quotesData);
})

router.post('/new', function (req, res){
    console.log('hello is this logging on the terminal')
    console.log('req.body in new quote post',req.body);
    quotesData.push({quoteText: req.body.quote_to_add}); //adding to quotes-data
    res.sendStatus(200);
})



    module.exports = router;

    //module.exports by default is an empty object