import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists } from "./scientistsService";
import { thinkerTokenValidation } from "../validation";

/**
 * search scientist by name
 * @param {object} args scientist object
 * @returns {Promise<any>} searched scientist
 */
const searchScientistByName = async (args) => {
    const userId = args.userId;
    const name = args.name;

    await thinkerTokenValidation(userId);

    if (!name) {
        throw new UserInputError("You have not provided a name");
    }

    const scientist = await Scientists.findOne({ name });

    if (!scientist) {
        throw new ApolloError("Scientist not found");
    }

    return await scientist;
};

export default searchScientistByName;
