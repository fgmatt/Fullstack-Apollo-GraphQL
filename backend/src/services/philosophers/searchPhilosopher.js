import Philosophers from "./philosophersService";

/**
 * Search a philosopher by his name
 * @param args {object} philosopher object
 * @returns {any} searched philosopher
 */
const searchPhilosopherByName = async (args) => {
    const name = args.name;

    if (!name) {
        throw Error("You have not provided a name");
    }

    return await Philosophers.findOne({ name });
};

export default searchPhilosopherByName;
