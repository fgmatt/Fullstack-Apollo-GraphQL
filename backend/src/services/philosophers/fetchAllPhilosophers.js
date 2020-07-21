import Philosophers from "./philosophersService";

/**
 * fetch all Philosophers
 * @returns {Promise<any>} returns all philosopher
 */
const fetchAllPhilosophers = async () => {
    return await Philosophers.find();
};

export default fetchAllPhilosophers;