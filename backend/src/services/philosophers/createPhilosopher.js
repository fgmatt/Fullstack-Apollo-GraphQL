import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./philosophersService";
import { thinkerTokenValidation } from "../validation";

/**
 * Create a philosopher
 * @param {object} args philosopher object
 * @returns {any} returns the created philosopher
 */
const createPhilosopher = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;
    let works = args.works;

    await thinkerTokenValidation(userId);

    const existingPhilosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (existingPhilosopher) {
        throw new ApolloError("Philosopher already exists");
    }

    if (
        livedIn === "???" ||
        topics === "???" ||
        biography === "???" ||
        biographicalData === "???" ||
        works === "???"
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
    if (!works) {
        works = "???";
    }

    const philosopher = new Philosophers({
        name,
        livedIn,
        topics,
        biography,
        biographicalData,
        works,
    });

    return await philosopher.save();
};

export default createPhilosopher;
