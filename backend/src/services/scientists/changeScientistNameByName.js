import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists, TokenThinkers } from "./scientistsService";

/**
 * change scientist name by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientistNameByName = async (args) => {
    const name = args.name;
    let newName = args.newName;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!scientist) {
        throw ApolloError("Scientist not found");
    }

    if (newName === "???") {
        throw UserInputError(
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
