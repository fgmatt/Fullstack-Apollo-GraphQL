import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./philosophersService";
import { thinkerTokenValidation } from "../validation";

/**
 * delete philosopher by name
 * @param {object} args philosopher object
 * @returns {Promise<any>} deleted philosopher
 */
const deletePhilosopherByName = async (args) => {
    const userId = args.userId;
    const name = args.name;

    await thinkerTokenValidation(userId);

    if (!name) {
        throw new UserInputError("You must provide a name");
    }

    const philosopher = await Philosophers.findOneAndDelete({ name });

    if (!philosopher) {
        throw new ApolloError("Philosopher not found");
    }

    return await philosopher;
};

export default deletePhilosopherByName;
