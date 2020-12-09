import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists, TokenThinkers } from "./scientistsService";
import { thinkerTokenValidation } from "../validation";

/**
 * change scientist biographical data by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientistBiographicalDataByName = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let biographicalData = args.biographicalData;

    await thinkerTokenValidation(userId);

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!scientist) {
        throw ApolloError("Scientist not found");
    }

    if (biographicalData === "???") {
        throw new UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!biographicalData) {
        biographicalData = "???";
    } else if (!(biographicalData === "???")) {
        if (biographicalData === scientist.biographicalData) {
            console.warn("The same biographicalData as before");
        }
    }

    scientist.biographicalData = biographicalData;

    await scientist.save();

    return scientist;
};

export default changeScientistBiographicalDataByName;
