import { port } from "../../keys/keys";

const whitelist = ["localhost:" + port];
const corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

module.exports = {
    corsOptions,
};
