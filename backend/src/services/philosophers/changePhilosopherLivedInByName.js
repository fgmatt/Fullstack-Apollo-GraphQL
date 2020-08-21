import Philosophers from "./philosophersService";

const changePhilosopherLivedInByName = async (args) => {
    const name = args.name;
    let livedIn = args.livedIn;

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!philosopher) {
        throw Error("Philosopher not found");
    }

    if (livedIn === "???") {
        throw Error(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!livedIn) {
        livedIn = "???";
    } else if (!(livedIn === "???")) {
        if (livedIn === philosopher.livedIn) {
            console.warn("The same livedIn as before");
        }
    }

    philosopher.livedIn = livedIn;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherLivedInByName;