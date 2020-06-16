import Scientists from "./scientistsService";

const createScientist = async (args) => {
    const name = args.name;
    let lived = args.lived;
    let topics = args.topics;
    let biography = args.biography;

    const existingScientist = Scientists.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (existingScientist){
        throw Error("Scientist already exists");
    }

    if (lived === "???" || topics === "???" || biography === "???") {
        throw Error("??? is a placeholder for an empty input");
    } else if (!lived) {
        lived = "???";
    } else if (!topics) {
        topics = "???";
    } else if (!biography) {
        biography = "???";
    }

    const scientist = new Scientists({
        name,
        lived,
        topics,
        biography,
    });

    return await scientist.save();
};

export default createScientist;
