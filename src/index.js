const app = require('./app');
const { port } = require('./keys/keys');

app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
});