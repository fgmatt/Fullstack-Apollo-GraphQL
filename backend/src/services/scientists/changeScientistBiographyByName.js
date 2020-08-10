import Scientists from "./scientistsService";

const changeScientistBiographyByName = async (args) => {
    const name = args.name;
    let biography = args.biography;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!scientist) {
        throw Error("Scientist not found");
    }

    if (biography === "???") {
        throw Error(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!biography) {
        biography = "???";
    } else if (!(biography === "???")) {
        if (biography === scientist.biography) {
            console.warn("The same biography as before");
        }
    }

    scientist.biography = biography;

    await scientist.save();

    return scientist;
};

export default changeScientistBiographyByName;