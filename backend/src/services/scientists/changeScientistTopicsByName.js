import Scientists from "./scientistsService";

const changeScientistTopicsByName = async (args) => {
    const name = args.name;
    let topics = args.topics;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!scientist) {
        throw Error("Scientist not found");
    }

    if (topics === "???") {
        throw Error(
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