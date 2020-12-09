import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists, TokenThinkers } from "./scientistsService";
import { thinkerTokenValidation } from "../validation";

/**
 * change scientist livedIn by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientistLivedInByName = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let livedIn = args.livedIn;

    await thinkerTokenValidation(userId);

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!scientist) {
        throw new ApolloError("Scientist not found");
    }

    if (livedIn === "???") {
        throw new UserInputError(
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
