import jwt from "jsonwebtoken";
import { jwt_secret, private_key_thinker } from "../keys/keys";

const timestamp = Math.floor(new Date().getTime() / 1000);
const expires = Math.floor(Date.now() / 1000) + 60 * 60 * 24;

/**
 * Create a JWT for signup or signin
 * @param {object} user the user the JWT is for
 * @returns {{token: *, expires: *}} JWT
 */
const tokenSign = (email) => {
    const payload = {
        ub: email,
        iat: timestamp,
        exp: expires,
    };

    const token = jwt.sign(payload, jwt_secret);

    return { token, expires };
};

/**
 * Create a JWT for the thinker database
 * @param {object} user the user the JWT is for
 * @returns {{token: *, expires: *}} JWT
 */
const tokenThinker = () => {
    const payload = {
        iat: timestamp,
        exp: expires,
    };

    const token = jwt.sign(payload, private_key_thinker, {
        algorithm: "RS256",
    });

    return token;
};

module.exports = { tokenSign, tokenThinker };
