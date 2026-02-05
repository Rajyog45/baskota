// src/models/Contact.ts
import mongoose, { Schema, models } from "mongoose";

const ContactSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

export default models.Contact || mongoose.model("Contact", ContactSchema);
