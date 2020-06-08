import jwt from "jsonwebtoken";
import { jwt_secret } from "../keys/keys";

/**
 * Create a JWT for signup or signin
 * @param user {object} the user the JWT is for
 * @returns {{token: *, expires: *}} JWT
 */
const tokenSign = email => {
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const expires = Math.floor(Date.now() / 1000) + 60 * 60 * 24;

    const payload = {
        ub: email,
        iat: timestamp,
        exp: expires,
    };

    const token = jwt.sign(payload, jwt_secret);

    return { token, expires };
};

module.exports = tokenSign;
