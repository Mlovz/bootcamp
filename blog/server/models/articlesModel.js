import mongoose from "mongoose";

const aricleModel = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "user" },
  title: {
    type: String,
    required: true,
    // minLength: 10,
    // maxLength: 100,
  },
  content: {
    type: String,
    require: true,
    // minLength: 500,
  },
  likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  images: {
    type: Array,
    default: [],
  },
  category: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("article", aricleModel);
