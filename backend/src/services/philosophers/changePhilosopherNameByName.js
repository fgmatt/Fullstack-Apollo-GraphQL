import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./philosophersService";
import { thinkerTokenValidation } from "../validation";

/**
 * Change philosopher name by his name
 * @param {object} args philosopher object
 * @returns {Promise<any>} changed philosopher
 */
const changePhilosopherNameByName = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let newName = args.newName;

    await thinkerTokenValidation(userId);

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw new ApolloError("Philosopher not found");
    }

    if (newName === "???") {
        throw new UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!newName) {
        newName = "???";
    } else if (!(newName === "???")) {
        if (newName === philosopher.name) {
            console.warn("The same name as before");
        }
    }

    philosopher.name = newName;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherNameByName;
