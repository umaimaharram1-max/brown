import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  product: String,
  quantity: Number,
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
