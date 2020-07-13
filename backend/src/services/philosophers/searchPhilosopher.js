import Philosophers from "./philosophersService";

const searchPhilosopherByName = async (args) => {
    const name = args.name;

    if (!name) {
        throw Error("You have not provided a name");
    }

    return await Philosophers.findOne({ name });
};

export default searchPhilosopherByName;
