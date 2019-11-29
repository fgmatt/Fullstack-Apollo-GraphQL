const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../keys/keys');

const payload = {
  data1: "Data 1",
  data2: "Data 2",
  data3: "Data 3",
  data4: "Data 4",
};

var token = jwt.sign(payload, jwt_secret);

module.exports = token;

