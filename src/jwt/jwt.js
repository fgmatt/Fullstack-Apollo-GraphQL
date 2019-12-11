import jwt from 'jsonwebtoken';
import { jwt_secret } from '../keys/keys';

const tokenSign = (user) => {
  const timestamp = new Date().getTime();
  const expires = Math.floor(Date.now() / 1000) + (60 * 60 * 24)

  const payload = {
    ub: user.email,
    iat: timestamp,
    exp: expires
  };
  
   var token = jwt.sign(payload, jwt_secret);

   return { token, expires }

};

module.exports = tokenSign;

