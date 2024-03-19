import mongoose from "mongoose";


const playlistSchema = new mongoose.Schema({
    playListName: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Login" },
    audio: [{ type: mongoose.Schema.Types.ObjectId, ref: "Addsongs" }]
});

export default mongoose.model("Playlist", playlistSchema);
