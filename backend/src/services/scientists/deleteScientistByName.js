import { UserInputError, ApolloError } from "apollo-server-express";
import Scientists from "./scientistsService";

/**
 * delete scientist by name
 * @param {object} args scientist object
 * @returns {Promise<any>} deleted scientist
 */
const deleteScientistByName = async (args) => {
    const name = args.name;

    if (!name) {
        throw UserInputError("You must provide a name");
    }

    const scientist = await Scientists.findOne({ name });

    if (!scientist) {
        throw ApolloError("Scientist not found");
    }

    return await Scientists.findOneAndDelete({ name });
};

export default deleteScientistByName;
