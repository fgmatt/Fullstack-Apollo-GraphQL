import { UserInputError, ApolloError } from "apollo-server-express";
import Scientists from "./scientistsService";

/**
 * Create a scientist
 * @param args {object} scientist object
 * @returns {Promise<any>} created scientist
 */
const createScientist = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;

    const existingScientist = await Scientists.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (existingScientist) {
        throw ApolloError("Scientist already exists");
    }

    if (
        livedIn === "???" ||
        topics === "???" ||
        biography === "???" ||
        biographicalData === "???"
    ) {
        throw UserInputError("??? is a placeholder for an empty input");
    } else if (!livedIn) {
        livedIn = "???";
    } else if (!topics) {
        topics = "???";
    } else if (!biography) {
        biography = "???";
    } else if (!biographicalData) {
        biographicalData = "???";
    }

    const scientist = new Scientists({
        name,
        livedIn,
        topics,
        biography,
        biographicalData,
    });

    return await scientist.save();
};

export default createScientist;
