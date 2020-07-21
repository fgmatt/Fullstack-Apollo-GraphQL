import Philosophers  from "./philosophersService";

/**
 * delete philosopher by name
 * @param args {object} philosopher object
 * @returns {Promise<any>} deleted philosopher
 */
const deletePhilosopherByName = async args => {
    const name = args.name;

    if (!name) {
        throw Error("You must provide a name");
    }

    return await Philosophers.findOneAndDelete({ name });
};

export default deletePhilosopherByName;