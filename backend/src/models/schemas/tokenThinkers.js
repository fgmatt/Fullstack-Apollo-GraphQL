import mongoose from "mongoose";

const tokenThinkersSchema = new mongoose.Schema(
    {
        token: String,
        userId: String,
    },
    { timestamps: true }
);

module.exports = tokenThinkersSchema;
