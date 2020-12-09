import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./philosophersService";
import { thinkerTokenValidation } from "../validation";

/**
 * Change philosopher biography by his name
 * @param {object} args philosopher object
 * @returns {Promise<any>} changed philosopher
 */
const changePhilosopherBiographyByName = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let biography = args.biography;

    await thinkerTokenValidation(userId);

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw new polloError("Philosopher not found");
    }

    if (biography === "???") {
        throw new UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!biography) {
        biography = "???";
    } else if (!(biography === "???")) {
        if (biography === philosopher.biography) {
            console.warn("The same biography as before");
        }
    }

    philosopher.biography = biography;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherBiographyByName;
