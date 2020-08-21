import Philosophers from "./philosophersService";

const changePhilosopherBiographyByName = async (args) => {
    const name = args.name;
    let biography = args.biography;

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!philosopher) {
        throw Error("Philosopher not found");
    }

    if (biography === "???") {
        throw Error(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!biography) {
        biography = "???";
    } else if (!(biography === "???")) {
        if (biography === philosopher.biography) {
            console.warn("The same biography as before");
        }
    }

    philosopher.biography = biography;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherBiographyByName;
