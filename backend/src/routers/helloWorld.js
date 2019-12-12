import express from 'express';
import cors from 'cors';
import corsOptions from './cors/cors';
const router = express.Router();

router.get('/helloworld', cors(corsOptions), function(req, res) {
    res.status(200).send('Hello World!');
});

module.exports = router;
