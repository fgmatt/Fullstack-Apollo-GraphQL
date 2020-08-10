import Scientists from "./scientistsService";

const changeScientistBiographicalDataByName = async (args) => {
    const name = args.name;
    let biographicalData = args.biographicalData;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!scientist) {
        throw Error("Scientist not found");
    }

    if (biographicalData === "???") {
        throw Error(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!biographicalData) {
        biographicalData = "???";
    } else if (!(biographicalData === "???")) {
        if (biographicalData === scientist.biographicalData) {
            console.warn("The same biographicalData as before");
        }
    }

    scientist.biographicalData = biographicalData;

    await scientist.save();

    return scientist;
};

export default changeScientistBiographicalDataByName;