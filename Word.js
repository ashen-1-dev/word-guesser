import mongoose from "mongoose";

const Word = new mongoose.Schema({
    name: {type: String, required: true, unique: true}
})

export default mongoose.model('Word', Word)