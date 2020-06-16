import Scientists from "./scientistsService";

const changeScientist = async (args) => {
    const name = args.name;
    let lived = args.lived;
    let topics = args.topics;
    let biography = args.biography;

    const existingScientist = await Scientists.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!existingScientist) {
        throw Error("Scientist not found");
    }

    if (lived === "???" || topics === "???" || biography === "???") {
        throw Error("??? is a placeholder for an empty input");
    } else if (!lived) {
        lived = "???";
    } else if (!topics) {
        topics = "???";
    } else if (!biography) {
        biography = "???";
    } else if (!(lived === "???" || topics === "???" || biography === "???")) {
        if (lived === existingScientist.lived) {
            throw Error("The same lived as before");
        } else if (topics === existingScientist.topics) {
            throw Error("The same topic as before");
        } else if (biography === existingScientist.biography) {
            throw Error("The same biography as before");
        }
    }

    await Scientists.updateOne({ name }, { lived, topics, biography });

    return Scientists.findOne({ name });
};

export default changeScientist;
