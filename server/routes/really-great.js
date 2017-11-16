var express = require('express');
var router = express.Router(); //this is a constructor
//returning an object, has .get method to get new routes.
//app.get starts whole new applications
//router.get begins a small piece of an application

router.get('/great', function (req, res) {
    
    res.send('this is a great string');
})

module.exports = router;

//we are building out a little piece of our app. Right now this is
//one route. We built it out here and exported, now we need 