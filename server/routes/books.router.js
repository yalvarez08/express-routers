const express = require('express');
let router = express.Router();

// GET /

const books = [
    {
        title: 'Tomorrow, and Tomorrow, and Tomorrow',
        author: 'Gabrielle Zevin'
    },
    {
        title: 'The Swan',
        author: 'Mary Oliver'
    }
];

router.get('/', (req, res) => {
    console.log('GET /books received a request!')
    res.send(books);
});

router.post('/', (req, res) => {
    console.log('POST /books received a request!')
    console.log('req.body:', req.body)

    books.push(req.body);
    res.sendStatus(200);
});

module.exports = router;
