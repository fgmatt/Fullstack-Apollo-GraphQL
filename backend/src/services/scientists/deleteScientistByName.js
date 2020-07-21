import Scientists from "./scientistsService";

/**
 * delete scientist by name
 * @param args {object} scientist object
 * @returns {Promise<any>} deleted scientist
 */
const deleteScientistByName = async (args) => {
    const name = args.name;

    if (!name) {
        throw Error("You must provide a name");
    }

    return await Scientists.findOneAndDelete({ name });
};

export default deleteScientistByName;
