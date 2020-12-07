import { UserInputError, ApolloError } from "apollo-server-express";
import Scientists from "./scientistsService";

/**
 * search scientist by name
 * @param {object} args scientist object
 * @returns {Promise<any>} searched scientist
 */
const searchScientistByName = async (args) => {
    const name = args.name;

    if (!name) {
        throw UserInputError("You have not provided a name");
    }

    const scientist = await Scientists.findOne({ name });

    if (!scientist) {
        throw ApolloError("Scientist not found");
    }

    return await scientist;
};

export default searchScientistByName;
