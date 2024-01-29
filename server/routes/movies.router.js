const express = require('express');
let router = express.Router();


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

  router.get('/', (req, res) => {
    console.log('GET /movies received a request!')
    res.send(movies);
  });
  
  router.post('/', (req, res) => {
    console.log('POST /movies received a request!')
    console.log('req.body:', req.body)
  
    movies.push(req.body);
    res.sendStatus(200);
  });

module.exports = router;