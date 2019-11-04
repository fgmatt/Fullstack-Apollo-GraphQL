const { User } = require('../models/mongoose')

function createUser(user) {
    User.create(
        { username: user.username , 
         firstname: user.firstname, 
         sirname: user.sirname, 
         email: user.email, 
         phone: user.phone, 
         password: user.password },  function (err, small) {
    
    });
};

module.exports = createUser;