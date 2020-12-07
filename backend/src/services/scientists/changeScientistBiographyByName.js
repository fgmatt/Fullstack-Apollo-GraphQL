import { UserInputError, ApolloError } from "apollo-server-express";
import Scientists from "./scientistsService";

/**
 * change scientist biography by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientistBiographyByName = async (args) => {
    const name = args.name;
    let biography = args.biography;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!scientist) {
        throw ApolloError("Scientist not found");
    }

    if (biography === "???") {
        throw UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!biography) {
        biography = "???";
    } else if (!(biography === "???")) {
        if (biography === scientist.biography) {
            console.warn("The same biography as before");
        }
    }

    scientist.biography = biography;

    await scientist.save();

    return scientist;
};

export default changeScientistBiographyByName;
