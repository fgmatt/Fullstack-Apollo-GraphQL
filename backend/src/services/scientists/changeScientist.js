import Scientists from "./scientistsService";

/**
 * change scientist by his name
 * @param args {object} scientist object
 * @returns {Promise<any>} changed scientist
 */
const changeScientist = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;

    const existingScientist = await Scientists.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!existingScientist) {
        throw Error("Scientist not found");
    }

    if (
        livedIn === "???" ||
        topics === "???" ||
        biography === "???" ||
        biographicalData === "???"
    ) {
        throw Error(
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
        if (livedIn === existingScientist.livedIn) {
            console.warn("The same lived as before");
        } else if (topics === existingScientist.topics) {
            console.warn("The same topic as before");
        } else if (biography === existingScientist.biography) {
            console.warn("The same biography as before");
        } else if (biographicalData === existingScientist.biographicalData) {
            console.warn("The same biographicalData as before");
        }
    }

    await Scientists.updateOne(
        { name },
        { livedIn, topics, biography, biographicalData }
    );

    return Scientists.findOne({ name });
};

export default changeScientist;
