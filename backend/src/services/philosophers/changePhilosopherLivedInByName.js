import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./philosophersService";

/**
 * Change philosopher livedIn by his name
 * @param {object} args philosopher object
 * @returns {Promise<any>} changed philosopher
 */
const changePhilosopherLivedInByName = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw ApolloError("Philosopher not found");
    }

    if (livedIn === "???") {
        throw UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!livedIn) {
        livedIn = "???";
    } else if (!(livedIn === "???")) {
        if (livedIn === philosopher.livedIn) {
            console.warn("The same livedIn as before");
        }
    }

    philosopher.livedIn = livedIn;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherLivedInByName;
