import Scientists from "./scientistsService";

const fetchAllScientists = async () => {
    return await Scientists.find();
};

export default fetchAllScientists;
