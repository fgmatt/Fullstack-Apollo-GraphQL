const express = require('express');
const router = new express.Router();

router.get('api/helloworld', function(req, res) {
    res.send('Hello World!');
});

module.exports = router;
