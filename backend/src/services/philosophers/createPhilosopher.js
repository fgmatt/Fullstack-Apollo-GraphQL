import { UserInputError, ApolloError } from "apollo-server-express";
import Philosophers from "./philosophersService";

/**
 * Create a philosopher
 * @param args {object} philosopher object
 * @returns {any} returns the created philosopher
 */
const createPhilosopher = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;
    let works = args.works;

    const existingPhilosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (existingPhilosopher) {
        throw ApolloError("Philosopher already exists");
    }

    if (
        livedIn === "???" ||
        topics === "???" ||
        biography === "???" ||
        biographicalData === "???" ||
        works === "???"
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
    } else if (!works) {
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
