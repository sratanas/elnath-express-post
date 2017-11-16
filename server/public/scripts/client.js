console.log('client.js has been loaded');

$(document).ready(function () {
    console.log('jquery loaded')
    getAllQuotes();
    
    //ALL OF THESE FUNCTIONS WAIT AND WAIT UNTIL IT GETS A RESPONSE FROM THE SERVER.
    //THESE ARE SETTING UP WHAT WILL HAPPEN WHEN WE GET A RESPONSE FROM THE SERVER.
    $.ajax({
        method: 'GET',
        url: '/quote/random', //we are making a get request to quotes all
        success: function (response) { //callback function, it runs after it finds it
            console.log('random quote response', response);
            $('p').append(response.quoteText);
            //it waits and waits and waits until the response comes back to it.
            //When it does it fires off the line of code.
            //You can't just send an object to the DOM, so putting response in 
            //$('p').append(response) won't work, need response.quote

        },
        error: function (error) {
            console.log('There was an error getting a random quote!!!', error);

        }
    })

    $.ajax({
        method: 'GET',
        url: '/quote/first',
        success: function (response) {
            console.log('first quote response', response);
            $('p').append(response.quoteText);

        }
    })
    $('#newQuoteButton').on('click', function () {
        console.log('I logged something!')
        $.ajax({
            method: 'POST', // standard to capitalize it
            url: '/quote/new',
            data: { quote_to_add: $('#input').val(), author_to_add: $('#inputAuthor').val()},     //data should always be an object //caps don't work here
            success: function (response) {
                console.log('New quote post response', response);
                //get request for all of the quotes
                getAllQuotes();
            }
        })
    })
});



function getAllQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function (response) {
            console.log('all quotes array', response);
            $('ul').html('')
            for (var i=0; i<response.length; i++){ //.append doesn't work with arrays, need to create a for loop.
                $('ul').append('<li><strong>Quote: </strong>'+ response[i].quoteText +' <strong>Author:</strong>' + response[i].author + '</li>');
                // quoteArray.push(response[i]);
            
            }

        }
    })
}
// var quoteArray;

//to do on the server side log something on this post, then res.sendStatus(200);
//add data to quotes
//response is whatever comes back in the res.send
//success is a callback function
//as soon as we run this line of code it's going to 


// var quoteArray = //input pushed into quote array;
// for (var i = 0; i < quotesData.length; i++) {
//     for (var j = 0; j < quoteArray.length; j++) {
//       if (quotesData[i] === quoteArray[j]) {
        
//           }
//         else{
//             $('ul').append('<li>'+ theInput+'</li>')
//         }
//       }
//   }