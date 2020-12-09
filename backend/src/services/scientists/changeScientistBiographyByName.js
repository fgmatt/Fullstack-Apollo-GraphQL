import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists, TokenThinkers } from "./scientistsService";
import { thinkerTokenValidation } from "../validation";

/**
 * change scientist biography by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientistBiographyByName = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let biography = args.biography;

    await thinkerTokenValidation(userId);

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!scientist) {
        throw new ApolloError("Scientist not found");
    }

    if (biography === "???") {
        throw new UserInputError(
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
