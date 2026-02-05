import mongoose, { Schema, models } from "mongoose";

const subscriptionSchema = new Schema({
  email: { type: String, required: true, unique: true },
  token: { type: String, required: true },
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default models.Subscription || mongoose.model("Subscription", subscriptionSchema);
