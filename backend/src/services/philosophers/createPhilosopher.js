import Philosophers from "./philosophersService";

const createPhilosopher = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;
    let works = args.works;

    const existingPhilosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (existingPhilosopher) {
        throw Error("Philosopher already exists");
    }

    if (
        livedIn === "???" ||
        topics === "???" ||
        biography === "???" ||
        biographicalData === "???" ||
        works === "???"
    ) {
        throw Error("??? is a placeholder for an empty input");
    } else if (!livedIn) {
        livedIn = "???";
    } else if (!topics) {
        topics = "???";
    } else if (!biography) {
        biography = "???";
    } else if (!biographicalData) {
        biographicalData = "???";
    } else if (!works) {
        works = "???";
    }

    const philosopher = new Philosophers({
        name,
        livedIn,
        topics,
        biography,
        biographicalData,
        works
    });

    return await philosopher.save();
};

export default createPhilosopher;