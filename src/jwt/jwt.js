import jwt from 'jsonwebtoken';
import { jwt_secret } from '../keys/keys';

//const token = () => {
  // const timestamp = new Date().getTime();
  // const expires = Math.floor(Date.now() / 1000) + (60 * 60 * 24)

  const payload = {
    data1: "Data 1",
    data2: "Data 2",
    data3: "Data 3",
    data4: "Data 4",
  };
  
   var token = jwt.sign(payload, jwt_secret);

//}

module.exports = token;

