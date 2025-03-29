const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profile_picture: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  species_found: { type: Number, default: 0 },  // Tracks unique species found
  captures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Capture" }] // Tracks all captures
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
