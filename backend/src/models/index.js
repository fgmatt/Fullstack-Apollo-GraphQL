import mongoose from "mongoose";
import { connUser, connThinker } from '../db/connect';
import philosophersSchema from "./schemas/philosophers";
import scientistsSchema from "./schemas/scientists";
import usersSchema from "./schemas/users";

const Philosophers = connThinker.model("Philosophers", philosophersSchema);
const Scientists = connThinker.model("Scientists", scientistsSchema);
const User = connUser.model("Users", usersSchema);

module.exports = {
    Philosophers,
    Scientists,
    User,
};
