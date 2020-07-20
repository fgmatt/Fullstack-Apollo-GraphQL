import Scientists from "./scientistsService";

/**
 * delete user by id
 * @param args {object} user object
 * @returns {Promise<any>} deleted user
 */
const deleteScientistByName = async (args) => {
    const name = args.name;

    if (!name) {
        throw Error("You must provide a name");
    }

    return await Scientists.findOneAndDelete({ name });
};

export default deleteScientistByName;
