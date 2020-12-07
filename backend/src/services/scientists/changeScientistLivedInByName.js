import { UserInputError, ApolloError } from "apollo-server-express";
import Scientists from "./scientistsService";

/**
 * change scientist livedIn by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientistLivedInByName = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!scientist) {
        throw ApolloError("Scientist not found");
    }

    if (livedIn === "???") {
        throw UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!livedIn) {
        livedIn = "???";
    } else if (!(livedIn === "???")) {
        if (livedIn === scientist.livedIn) {
            console.warn("The same livedIn as before");
        }
    }

    scientist.livedIn = livedIn;

    await scientist.save();

    return scientist;
};

export default changeScientistLivedInByName;
