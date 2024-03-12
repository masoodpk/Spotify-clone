import mongoose from "mongoose";
                             
const schema = new mongoose.Schema({
    userId: { type: String },
    audio: { type: String },
    playlists: { type: String },
});

export default mongoose.model.Playlists || mongoose.model("Playlist", schema);
