import mongoose from "mongoose";
const InstituteSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true },
    name: { type: String, default: "IIITV" },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model.Institute ||
  mongoose.model("Institute", InstituteSchema);
