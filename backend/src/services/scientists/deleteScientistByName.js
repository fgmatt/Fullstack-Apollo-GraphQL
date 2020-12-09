import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists, TokenThinkers } from "./scientistsService";
import { thinkerTokenValidation } from "../validation";

/**
 * delete scientist by name
 * @param {object} args scientist object
 * @returns {Promise<any>} deleted scientist
 */
const deleteScientistByName = async (args) => {
    const userId = args.userId;
    const name = args.name;

    await thinkerTokenValidation(userId);

    if (!name) {
        throw new UserInputError("You must provide a name");
    }

    const scientist = await Scientists.findOne({ name });

    if (!scientist) {
        throw new ApolloError("Scientist not found");
    }

    return await Scientists.findOneAndDelete({ name });
};

export default deleteScientistByName;
