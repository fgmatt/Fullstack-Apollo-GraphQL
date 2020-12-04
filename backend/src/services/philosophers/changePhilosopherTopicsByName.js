import { UserInputError, ApolloError } from "apollo-server-express";
import Philosophers from "./PhilosophersService";

const changePhilosopherTopicsByName = async (args) => {
    const name = args.name;
    let topics = args.topics;

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw UserInputError("You must provide a name");
    } else if (!philosopher) {
        throw ApolloError("Philosopher not found");
    }

    if (topics === "???") {
        throw UserInputError(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!topics) {
        topics = "???";
    } else if (!(topics === "???")) {
        if (topics === philosopher.topics) {
            console.warn("The same topics as before");
        }
    }

    philosopher.topics = topics;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherTopicsByName;
