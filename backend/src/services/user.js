import createUser from "./userService/authentication";
import findByUsername from "./userService/filterUser";

var example = {
    username: "Nodemon",
    firstname: "Margarethe",
    sirname: "Muster",
    email: "example@nodemon.com",
    phone: "099 111 22 33",
    password: "dummy123$",
};

var example2 = {
    username: "slash4512",
    firstname: "Mario",
    sirname: "Merchant",
    email: "example@merchant.com",
    phone: "099 666 22 33",
    password: "hash123$$",
};

var example3 = {
    username: "lostofmana13",
    firstname: "Marina",
    sirname: "Mirota",
    email: "marina@mirota.com",
    phone: "011 666 22 33",
    password: "hash123$$_43",
};

var ExampleCreateUser = {
    username: "janusoftheday",
    firstname: "Mirco",
    sirname: "Janus",
    email: "janus@moonday.ch",
    phone: "011 445 43 23",
    password: "gettibettiuserofthemoon",
};

// var CreateUserBody = {
//     username: req.body.username,
//     firstname: req.body.firstname,
//     sirname: req.body.sirname,
//     email: req.body.email,
//     phone: req.body.phone,
//     password: req.body.password
// };

// createUser(example);
// createUser(example2);
// createUser(example3);
// findByUsername('lostofmana13');

export default ExampleCreateUser;
