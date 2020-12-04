import { UserInputError, ApolloError } from "apollo-server-express";
import Philosophers from "./philosophersService";

/**
 * Change philosopher by his name
 * @param args {object} philosopher object
 * @returns {Promise<any>} changed philosopher
 */
const changePhilosopher = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;
    let works = args.works;

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw ApolloError("Scientist not found");
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
    } else if (!biographicalData) {
        biographicalData = "???";
    } else if (!biography) {
        biography = "???";
    } else if (!works) {
        works = "???";
    } else if (
        !(
            livedIn === "???" ||
            topics === "???" ||
            biography === "???" ||
            biographicalData == "???" ||
            works === "???"
        )
    ) {
        if (livedIn === philosopher.livedIn) {
            console.warn("The same lived as before");
        } else if (topics === philosopher.topics) {
            console.warn("The same topic as before");
        } else if (biography === philosopher.biography) {
            console.warn("The same biography as before");
        } else if (biographicalData === philosopher.biographicalData) {
            console.warn("The same biographicalData as before");
        } else if (works === philosopher.works) {
            console.warn("The same works as before");
        }
    }

    philosopher.livedIn = livedIn;
    philosopher.topics = topics;
    philosopher.biography = biography;
    philosopher.works = works;
    philosopher.biographicalData = biographicalData;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopher;
