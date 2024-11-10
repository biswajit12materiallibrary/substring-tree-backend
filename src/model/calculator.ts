import mongoose, { Schema, Document } from "mongoose";

const calculationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    input: {},
    result: {},
    type: { type: String, enum: ["substring", "binary-tree"] },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: false,
  }
);
export default mongoose.model<any>("Calculation", calculationSchema);
