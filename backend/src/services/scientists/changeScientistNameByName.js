import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists, TokenThinkers } from "./scientistsService";
import { thinkerTokenValidation } from "../validation";

/**
 * change scientist name by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientistNameByName = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let newName = args.newName;

    await thinkerTokenValidation(userId);

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!scientist) {
        throw new ApolloError("Scientist not found");
    }

    if (newName === "???") {
        throw new UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!newName) {
        newName = "???";
    } else if (!(newName === "???")) {
        if (newName === scientist.name) {
            console.warn("The same name as before");
        }
    }

    scientist.name = newName;

    await scientist.save();

    return scientist;
};

export default changeScientistNameByName;
