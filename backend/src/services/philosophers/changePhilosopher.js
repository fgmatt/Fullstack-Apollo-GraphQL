import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./philosophersService";
import { thinkerTokenValidation } from "../validation";

/**
 * Change philosopher by his name
 * @param {object} args philosopher object
 * @returns {Promise<any>} changed philosopher
 */
const changePhilosopher = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;
    let works = args.works;

    await thinkerTokenValidation(userId);

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw new ApolloError("Scientist not found");
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
    if (!biographicalData) {
        biographicalData = "???";
    }
    if (!biography) {
        biography = "???";
    }
    if (!works) {
        works = "???";
    }
    if (
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
        }
        if (topics === philosopher.topics) {
            console.warn("The same topic as before");
        }
        if (biography === philosopher.biography) {
            console.warn("The same biography as before");
        }
        if (biographicalData === philosopher.biographicalData) {
            console.warn("The same biographicalData as before");
        }
        if (works === philosopher.works) {
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
