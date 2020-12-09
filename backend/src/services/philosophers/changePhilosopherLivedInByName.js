import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./philosophersService";
import { thinkerTokenValidation } from "../validation";

/**
 * Change philosopher livedIn by his name
 * @param {object} args philosopher object
 * @returns {Promise<any>} changed philosopher
 */
const changePhilosopherLivedInByName = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let livedIn = args.livedIn;

    await thinkerTokenValidation(userId);

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw new ApolloError("Philosopher not found");
    }

    if (livedIn === "???") {
        throw new UserInputError(
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
