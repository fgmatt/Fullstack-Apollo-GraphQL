import { UserInputError, ApolloError } from "apollo-server-express";
import { Philosophers, TokenThinkers } from "./philosophersService";
import { thinkerTokenValidation } from "../validation";

/**
 * Change philosopher biographical data by his name
 * @param {object} args philosopher object
 * @returns {Promise<any>} changed philosopher
 */
const changePhilosopherBiographicalDataByName = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let biographicalData = args.biographicalData;

    await thinkerTokenValidation(userId);

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw new ApolloError("Philosopher not found");
    }

    if (biographicalData === "???") {
        throw new UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!biographicalData) {
        biographicalData = "???";
    } else if (!(biographicalData === "???")) {
        if (biographicalData === philosopher.biographicalData) {
            console.warn("The same biographicalData as before");
        }
    }

    philosopher.biographicalData = biographicalData;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherBiographicalDataByName;
