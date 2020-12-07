import { UserInputError, ApolloError } from "apollo-server-express";
import Philosophers from "./philosophersService";

/**
 * Search a philosopher by his name
 * @param {object} args philosopher object
 * @returns {any} searched philosopher
 */
const searchPhilosopherByName = async (args) => {
    const name = args.name;

    if (!name) {
        throw UserInputError("You have not provided a name");
    }

    const philosopher = await Philosophers.findOne({ name });

    if (!philosopher) {
        throw ApolloError("Philosopher not found");
    }

    return await philosopher;
};

export default searchPhilosopherByName;
