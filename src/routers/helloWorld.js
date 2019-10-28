const express = require('express');
const cors = require('cors');
const corsOptions = require('./cors/cors');
const router = express.Router();

router.get('/helloworld', cors(corsOptions), function(req, res) {
    res.status(200).send('Hello World!');
});

module.exports = router;
