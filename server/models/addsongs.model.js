import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userId: {
        type: String
    },
    profile: {
        type: String
    },
    title: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    },
    audio: {
        type: String
    }
});

export default mongoose.model.Addsongs || mongoose.model("Addsongs", schema);
