import mongoose from "mongoose";

const searchSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        unique: true
    },
    searchCount: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Search = mongoose.model("Search", searchSchema);
export default Search;