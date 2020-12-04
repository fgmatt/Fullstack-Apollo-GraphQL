import { UserInputError, ApolloError } from "apollo-server-express";
import Philosophers from "./philosophersService";

const changePhilosopherNameByName = async (args) => {
    const name = args.name;
    let newName = args.newName;

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw ApolloError("Philosopher not found");
    }

    if (newName === "???") {
        throw UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!newName) {
        newName = "???";
    } else if (!(newName === "???")) {
        if (newName === philosopher.name) {
            console.warn("The same name as before");
        }
    }

    philosopher.name = newName;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherNameByName;
