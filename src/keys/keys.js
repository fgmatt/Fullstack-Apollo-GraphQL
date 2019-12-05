require('dotenv').config();
//import 'dotenv/config';

module.exports = {
    port: process.env.PORT,
    url_mongodb: process.env.URL_MONGODB,
    jwt_secret: process.env.JWT_SECRET
}