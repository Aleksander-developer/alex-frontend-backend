// src/models/newsletter.model.ts
import mongoose from 'mongoose';

const NewsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Newsletter = mongoose.model('Newsletter', NewsletterSchema);
