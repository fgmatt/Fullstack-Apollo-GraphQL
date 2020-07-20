import Philosophers  from "./philosophersService";

/**
 * delete user by id
 * @param args {object} user object
 * @returns {Promise<any>} deleted user
 */
const deletePhilosopherByName = async args => {
    const name = args.name;

    if (!name) {
        throw Error("You must provide a name");
    }

    return await Philosophers.findOneAndDelete({ name });
};

export default deletePhilosopherByName;