import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists, TokenThinkers } from "./scientistsService";
import { jwt_secret_thinker } from "../../keys/keys";

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

    const tokenThinkers = await TokenThinkers.findOne({ userId });

    await jwt.verify(token, jwt_secret_thinker);

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
