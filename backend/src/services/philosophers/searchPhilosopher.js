import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers } from "./philosophersService";
import { thinkerTokenValidation } from "../validation";

/**
 * Search a philosopher by his name
 * @param {object} args philosopher object
 * @returns {any} searched philosopher
 */
const searchPhilosopherByName = async (args) => {
    const userId = args.userId;
    const name = args.name;

    await thinkerTokenValidation(userId);

    if (!name) {
        throw new UserInputError("You have not provided a name");
    }

    const philosopher = await Philosophers.findOne({ name });

    if (!philosopher) {
        throw new ApolloError("Philosopher not found");
    }

    return await philosopher;
};

export default searchPhilosopherByName;
