import Scientists from "./scientistsService";

const changeScientistLivedInByName = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!scientist) {
        throw Error("Scientist not found");
    }

    if (livedIn === "???") {
        throw Error(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!livedIn) {
        livedIn = "???";
    } else if (!(livedIn === "???")) {
        if (livedIn === scientist.livedIn) {
            console.warn("The same livedIn as before");
        }
    }

    scientist.livedIn = livedIn;

    await scientist.save();

    return scientist;
};

export default changeScientistLivedInByName;