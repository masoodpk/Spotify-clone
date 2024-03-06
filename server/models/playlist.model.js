import mongoose from "mongoose";
                             
const schema = new mongoose.Schema({
    userId: { type: String },
    song_id: { type: String },
    playlist: { type: String },
});

export default mongoose.model.Playlists || mongoose.model("Playlist", schema);
