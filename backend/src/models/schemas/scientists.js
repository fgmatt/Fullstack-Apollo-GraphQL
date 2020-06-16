import mongoose from "mongoose";

const scientistsSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    lived: { type: String, trim: true },
    topics: { type: String, trim: true, required: true },
    biography: String,
});

module.exports = scientistsSchema;
