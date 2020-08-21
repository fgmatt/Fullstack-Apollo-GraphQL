import Philosophers from "./philosophersService";

const changePhilosopherNameByName = async (args) => {
    const name = args.name;
    let newName = args.newName;

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!philosopher) {
        throw Error("Philosopher not found");
    }

    if (newName === "???") {
        throw Error(
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