import Philosophers from "./philosophersService";

const fetchAllPhilosophers = async () => {
    return await Philosophers.find();
};

export default fetchAllPhilosophers;