import Philosophers from "./philosophersService";

const changePhilosopher = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;
    let biographicalData = args.biographicalData;
    let topics = args.topics;
    let biography = args.biography;
    let works = args.works;

    const existingPhilosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!existingPhilosopher) {
        throw Error("Scientist not found");
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
    } else if (!biographicalData) {
        biographicalData = "???";
    } else if (!biography) {
        biography = "???";
    } else if (!works) {
        works = "???";
    } else if (
        !(
            livedIn === "???" ||
            topics === "???" ||
            biography === "???" ||
            biographicalData == "???" ||
            works === "???"
        )
    ) {
        if (livedIn === existingPhilosopher.livedIn) {
            console.warn("The same lived as before");
        } else if (topics === existingPhilosopher.topics) {
            console.warn("The same topic as before");
        } else if (biography === existingPhilosopher.biography) {
            console.warn("The same biography as before");
        } else if (biographicalData === existingPhilosopher.biographicalData) {
            console.warn("The same biographicalData as before");
        } else if (works === existingPhilosopher.works) {
            console.warn("The same works as before");
        }
    }

    await Philosophers.updateOne(
        { name },
        { livedIn, topics, biography, biographicalData, works }
    );

    return Philosophers.findOne({ name });
};

export default changePhilosopher;
