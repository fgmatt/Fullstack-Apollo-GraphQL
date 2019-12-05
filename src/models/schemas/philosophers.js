import mongoose from 'mongoose';

const philosophersSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true},
    lived: { type: String, trim: true}, 
    body: String
});

export default philosophersSchema;