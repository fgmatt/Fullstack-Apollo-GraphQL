import { UserInputError, ApolloError } from "apollo-server-express";
import Scientists from "./scientistsService";

/**
 * change scientist by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientistTopicsByName = async (args) => {
    const name = args.name;
    let topics = args.topics;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!scientist) {
        throw ApolloError("Scientist not found");
    }

    if (topics === "???") {
        throw UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!topics) {
        topics = "???";
    } else if (!(topics === "???")) {
        if (topics === scientist.topics) {
            console.warn("The same topics as before");
        }
    }

    scientist.topics = topics;

    await scientist.save();

    return scientist;
};

export default changeScientistTopicsByName;
