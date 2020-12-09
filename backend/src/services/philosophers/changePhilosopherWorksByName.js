import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./PhilosophersService";
import { thinkerTokenValidation } from "../validation";

/**
 * Change philosopher works by his name
 * @param {object} args philosopher object
 * @returns {Promise<any>} changed philosopher
 */
const changePhilosopherWorksByName = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let works = args.works;

    await thinkerTokenValidation(userId);

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw new ApolloError("Philosopher not found");
    }

    if (works === "???") {
        throw new UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!works) {
        works = "???";
    } else if (!(works === "???")) {
        if (works === philosopher.works) {
            console.warn("The same works as before");
        }
    }

    philosopher.works = works;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherWorksByName;
