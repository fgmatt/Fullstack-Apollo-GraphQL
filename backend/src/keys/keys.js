require("dotenv").config();

module.exports = {
    port: process.env.PORT,
    url_mongodb_users: process.env.URL_MONGODB_USERS,
    url_mongodb_thinker: process.env.URL_MONGODB_THINKER,
    jwt_secret: process.env.JWT_SECRET,
};
