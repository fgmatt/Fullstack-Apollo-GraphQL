import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./philosophersService";

/**
 * delete philosopher by name
 * @param {object} args philosopher object
 * @returns {Promise<any>} deleted philosopher
 */
const deletePhilosopherByName = async (args) => {
    const name = args.name;

    if (!name) {
        throw UserInputError("You must provide a name");
    }

    const philosopher = await Philosophers.findOneAndDelete({ name });

    if (!philosopher) {
        throw ApolloError("Philosopher not found");
    }

    return await philosopher;
};

export default deletePhilosopherByName;
