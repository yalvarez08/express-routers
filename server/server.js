const express = require('express');
const bookRouter = require('./routes/books.router.js');
const moviesRouter = require('./routes/movies.router.js');


const app = express();

const PORT = process.env.PORT || 5001;

// GET


/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.static('server/public'));

/** ------ IMPORT THE ROUTER FILES ------ **/
// TODO - Import the router files here:

// TODO - Make sure to move these bits of data
//        into their corresponding router files!


/** ---------- EXPRESS ROUTES ---------- **/

// This is how we use an express router
// app.use(____, ____) <- it takes in two things
// The first thing, is a path that you decide to name
// The second thing, is the router
app.use('/books', bookRouter);

app.use('/movies', moviesRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
