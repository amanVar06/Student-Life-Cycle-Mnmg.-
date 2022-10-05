import mongoose from "mongoose";
const DocumentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, default: "" },
    uid: { type: String, required: true },
    image: {
      type: Buffer,
      required: true,
      contentType: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model.Document ||
  mongoose.model("Document", DocumentSchema);
