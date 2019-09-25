const app = require('./app');

const port = 2850;

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})