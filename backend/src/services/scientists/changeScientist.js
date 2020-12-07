import { UserInputError, ApolloError } from "apollo-server-express";
import Scientists from "./scientistsService";

/**
 * change scientist by his name
 * @param {object} args scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientist = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!scientist) {
        throw ApolloError("Scientist not found");
    }

    if (
        livedIn === "???" ||
        topics === "???" ||
        biography === "???" ||
        biographicalData === "???"
    ) {
        throw UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!livedIn) {
        livedIn = "???";
    } else if (!topics) {
        topics = "???";
    } else if (!biographicalData) {
        biographicalData = "???";
    } else if (!biography) {
        biography = "???";
    } else if (
        !(
            livedIn === "???" ||
            topics === "???" ||
            biography === "???" ||
            biographicalData == "???"
        )
    ) {
        if (livedIn === scientist.livedIn) {
            console.warn("The same lived as before");
        } else if (topics === scientist.topics) {
            console.warn("The same topic as before");
        } else if (biography === scientist.biography) {
            console.warn("The same biography as before");
        } else if (biographicalData === scientist.biographicalData) {
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
