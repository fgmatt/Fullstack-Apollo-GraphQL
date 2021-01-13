import { UserInputError, ApolloError } from "apollo-server-express";
import { Scientists, TokenThinkers } from "./scientistsService";
import { thinkerTokenValidation } from "../validation";

/**
 * change scientist by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientist = async (args) => {
    const userId = args.userId;
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;

    await thinkerTokenValidation(userId);

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw new UserInputError("You must provide a name");
    } else if (!scientist) {
        throw new ApolloError("Scientist not found");
    }

    if (
        livedIn === "???" ||
        topics === "???" ||
        biography === "???" ||
        biographicalData === "???"
    ) {
        throw new UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    }
    if (!livedIn) {
        livedIn = "???";
    }
    if (!topics) {
        topics = "???";
    }
    if (!biographicalData) {
        biographicalData = "???";
    }
    if (!biography) {
        biography = "???";
    }
    if (
        !(
            livedIn === "???" ||
            topics === "???" ||
            biography === "???" ||
            biographicalData == "???"
        )
    ) {
        if (livedIn === scientist.livedIn) {
            console.warn("The same lived as before");
        }
        if (topics === scientist.topics) {
            console.warn("The same topic as before");
        }
        if (biography === scientist.biography) {
            console.warn("The same biography as before");
        }
        if (biographicalData === scientist.biographicalData) {
            console.warn("The same biographicalData as before");
        }
    }

    scientist.livedIn = livedIn;
    scientist.topics = topics;
    scientist.biographicalData = biographicalData;
    scientist.biography = biography;

    await scientist.save();

    return scientist;
};

export default changeScientist;
