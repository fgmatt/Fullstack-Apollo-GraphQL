import Scientists from "./scientistsService";

const changeScientistNameByName = async (args) => {
    const name = args.name;
    let newName = args.newName;

    const scientist = await Scientists.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!scientist) {
        throw Error("Scientist not found");
    }

    if (newName === "???") {
        throw Error(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!newName) {
        newName = "???";
    } else if (!(newName === "???")) {
        if (newName === scientist.name) {
            console.warn("The same name as before");
        }
    }

    scientist.name = newName;

    await scientist.save();

    return scientist;
};

export default changeScientistNameByName;
