import mongoose from "mongoose";

const CaptureSchema = new mongoose.Schema({
  image: { type: String, required: true },
  species_name: { type: String, required: true },
  description: { type: String },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  is_invasive: { type: Boolean, default: false },
  is_in_danger: { type: Boolean, default: false }
});

export default mongoose.models.Capture || mongoose.model("Capture", CaptureSchema);
