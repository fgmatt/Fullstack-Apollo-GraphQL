import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists, TokenThinkers } from "./scientistsService";

/**
 * change scientist biographical data by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientistBiographicalDataByName = async (args) => {
    const name = args.name;
    let biographicalData = args.biographicalData;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!scientist) {
        throw ApolloError("Scientist not found");
    }

    if (biographicalData === "???") {
        throw UserInputError(
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
