import Scientists from "./scientistsService";

/**
 * search scientist by name
 * @param args {object} scientist object 
 * @returns {Promise<any>} searched scientist
 */
const searchScientistByName = async (args) => {
    const name = args.name;

    if (!name) {
        throw Error("You have not provided a name");
    }

    return await Scientists.findOne({ name });
};

export default searchScientistByName;
