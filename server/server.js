const express = require('express');
const bookRouter = require('./routes/books.router.js');

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
const movies = [
  {
    title: 'Lady Bird',
    director: 'Greta Gerwig'
  },
  {
    title: 'Everything Everywhere All at Once',
    director: 'Daniel Kwan and Daniel Scheinert'
  }
];

/** ---------- EXPRESS ROUTES ---------- **/

// This is how we use an express router
// app.use(____, ____) <- it takes in two things
// The first thing, is a path that you decide to name
// The second thing, is the router
app.use('/books', bookRouter);


app.get('/movies', (req, res) => {
  console.log('GET /movies received a request!')
  res.send(movies);
});

app.post('/movies', (req, res) => {
  console.log('POST /movies received a request!')
  console.log('req.body:', req.body)

  movies.push(req.body);
  res.sendStatus(200);
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
