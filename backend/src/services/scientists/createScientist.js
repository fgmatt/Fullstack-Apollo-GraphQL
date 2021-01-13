import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists, TokenThinkers } from "./scientistsService";
import { thinkerTokenValidation } from "../validation";

/**
 * Create a scientist
 * @param {object} args scientist object
 * @returns {Promise<any>} created scientist
 */
const createScientist = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;

    await thinkerTokenValidation(userId);

    const existingScientist = await Scientists.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (existingScientist) {
        throw new ApolloError("Scientist already exists");
    }

    if (
        livedIn === "???" ||
        topics === "???" ||
        biography === "???" ||
        biographicalData === "???"
    ) {
        throw new UserInputError("??? is a placeholder for an empty input");
    }
    if (!livedIn) {
        livedIn = "???";
    }
    if (!topics) {
        topics = "???";
    }
    if (!biography) {
        biography = "???";
    }
    if (!biographicalData) {
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
