import Philosophers from "./philosophersService";

const changePhilosopherBiographicalDataByName = async (args) => {
    const name = args.name;
    let biographicalData = args.biographicalData;

    const philosopher = await Philosophers.findOne({ name });

    if (!name) {
        throw Error("You must provide a name");
    } else if (!philosopher) {
        throw Error("Philosopher not found");
    }

    if (biographicalData === "???") {
        throw Error(
            "??? or 000 for numbers is a placeholder for an empty input"
        );
    } else if (!biographicalData) {
        biographicalData = "???";
    } else if (!(biographicalData === "???")) {
        if (biographicalData === philosopher.biographicalData) {
            console.warn("The same biographicalData as before");
        }
    }

    philosopher.biographicalData = biographicalData;

    await philosopher.save();

    return philosopher;
};

export default changePhilosopherBiographicalDataByName;