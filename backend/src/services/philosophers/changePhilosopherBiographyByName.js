import { UserInputError, ApolloError } from "apollo-server-express";
import Philosophers from "./philosophersService";

/**
 * Change philosopher biography by his name
 * @param {object} args philosopher object
 * @returns {Promise<any>} changed philosopher
 */
const changePhilosopherBiographyByName = async (args) => {
    const name = args.name;
    let biography = args.biography;

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw ApolloError("Philosopher not found");
    }

    if (biography === "???") {
        throw UserInputError(
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
