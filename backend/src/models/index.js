import { connUser, connThinker } from "../db/connect";
import philosophersSchema from "./schemas/philosophers";
import scientistsSchema from "./schemas/scientists";
import usersSchema from "./schemas/users";
import tokenThinkersSchema from "./schemas/tokenThinkers";

const Philosophers = connThinker.model("Philosophers", philosophersSchema);
const Scientists = connThinker.model("Scientists", scientistsSchema);
const TokenThinkers = connThinker.model("TokenThinkers", tokenThinkersSchema);
const User = connUser.model("Users", usersSchema);

module.exports = {
    Philosophers,
    Scientists,
    TokenThinkers,
    User,
};
