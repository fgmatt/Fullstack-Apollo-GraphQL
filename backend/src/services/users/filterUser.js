import jwt from "jsonwebtoken";
import { ForbiddenError } from "apollo-server-express";
import { User } from "./userService";
import { jwt_secret } from "../../keys/keys";

/**
 * find user by a filter
 * @param {object} token user jwt token
 * @param {object} filter given filter
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

/**
 * find user by username
 * @param {object} args user object
 * @returns {Promise<any>} found user
 */
const findByUsername = async ({ token, email }) => {
    const filterEmail = {
        email: email,
    };
    return await findUser(token, filterEmail);
};

/**
 * find user by id
 * @param {object} args user object
 * @returns {Promise<any>} found user
 */
const userfindById = async ({ token, _id }) => {
    const filterId = {
        _id: _id,
    };
    return await findUser(token, filterId);
};

module.exports = { findByUsername, userfindById };
