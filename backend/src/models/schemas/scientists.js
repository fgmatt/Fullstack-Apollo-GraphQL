import mongoose from "mongoose";

const scientistsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        livedIn: { type: String, trim: true },
        biographicalData: String,
        topics: { type: String, trim: true, required: true },
        biography: String,
    },
    { timestamps: true }
);

module.exports = scientistsSchema;
