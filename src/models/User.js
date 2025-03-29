import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profile_picture: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  species_found: { type: Number, default: 0 },
  captures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Capture" }]
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
