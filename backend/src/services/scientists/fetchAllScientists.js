import Scientists from "./scientistsService";

/**
 * fetch all scientists
 * @returns {Promise<any>} all scientists
 */
const fetchAllScientists = async () => {
    return await Scientists.find();
};

export default fetchAllScientists;
