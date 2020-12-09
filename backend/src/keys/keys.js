require("dotenv").config();

module.exports = {
    port: process.env.PORT,
    url_mongodb_users: process.env.URL_MONGODB_USERS,
    url_mongodb_thinker: process.env.URL_MONGODB_THINKER,
    jwt_secret: process.env.JWT_SECRET,
    jwt_secret_thinker: process.env.JWT_SECRET_THINKER,
    private_key_thinker: process.env.PRIVATE_KEY_THINKER.replace(/\\n/g, "\n"),
    public_key_thinker: process.env.PUBLIC_KEY_THINKER.replace(/\\n/g, "\n"),
};
