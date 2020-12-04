import jwt from "jsonwebtoken";
import { ForbiddenError } from "apollo-server-express";
import User from "./userService";
import { jwt_secret } from "../../keys/keys";

/**
 * find user by email
 * @param args {object} user object
 * @returns {Promise<any>} found user
 */

const findUser = async (token, filter) => {
    await jwt.verify(token, jwt_secret);

    const user = await User.findOne(filter).exec();

    if (token !== user.token) {
        throw ForbiddenError("invalid token");
    }

    return await user;
};

const findByUsername = async ({ token, email }) => {
    const filterEmail = {
        email: email,
    };
    return await findUser(token, filterEmail);
};

const userfindById = async ({ token, _id }) => {
    const filterId = {
        _id: _id,
    };
    return await findUser(token, filterId);
};

module.exports = { findByUsername, userfindById };
