var express = require('express');
var router = express.Router();

router.get('/', function (req, res) { //takes in request and response parameters
    console.log('someone made a get request!');
    // // res.sendStatus(200)
    // if (1+1==2){
    //     res.send('the world is at peace');
    // } 
    // else {
    //     res.send('there is only chaos');
    // }
 
});

module.exports = router;