// Import the 'express' module and create an Express application.
const express = require('express');
const app = express();
// Define the port number the server will listen on.
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const bodyParser = require('body-parser');
// Import and use 'body-parser' middleware to handle request body data.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/api/books', (req, res) => {
    // Send a generic "Hello POST" response.
    console.log(req.body);
    res.send("Hello POST");
});




app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/api/books', (req, res) => 
{
    const data = 
    [
    {
        "title": "Learn Git in a Month of Lunches 3333",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []

        }];
         // Send a JSON response containing book data and a message.
    res.json({
        myBooks: data,
        "Message": "Hello from server.js",
        "Status": "Happy"
    });
});
//  Start the server and listen on the specified port.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});