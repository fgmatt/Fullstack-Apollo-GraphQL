import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./PhilosophersService";
import { thinkerTokenValidation } from "../validation";

/**
 * Change philosopher topics by his name
 * @param {object} args philosopher object
 * @returns {Promise<any>} changed philosopher
 */
const changePhilosopherTopicsByName = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let topics = args.topics;

    await thinkerTokenValidation(userId);

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw new ApolloError("Philosopher not found");
    }

    if (topics === "???") {
        throw new UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!topics) {
        topics = "???";
    } else if (!(topics === "???")) {
        if (topics === philosopher.topics) {
            console.warn("The same topics as before");
        }
    }

    philosopher.topics = topics;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherTopicsByName;
