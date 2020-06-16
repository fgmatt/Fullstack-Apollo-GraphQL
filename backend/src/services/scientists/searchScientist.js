import Scientists from "./scientistsService";

const searchScientistByName = async (args) => {
    const name = args.name;

    if (!name) {
        throw Error("You have not provided a name");
    }

    return await Scientists.findOne({ name });
};

export default searchScientistByName;
