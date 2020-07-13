import mongoose from "mongoose";

const philosophersSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        biographicalData: { type: String, trim: true },
        livedIn: String,
        topics: String,
        works: String,
        biography: String,
    },
    { timestamps: true }
);

module.exports = philosophersSchema;
