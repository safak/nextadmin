import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    keyword: { type: String, required: true },
    source: { type: String, required: true },
    instance: { type: String, required: true },
    scraping_date: { type: Date },
    link: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    news_date: { type: Date },
    content: { type: String },
    sentiment: { type: String },
    error: { type: String }
  },
  { timestamps: true }
);

export const News = mongoose.models.News || mongoose.model("News", newsSchema);