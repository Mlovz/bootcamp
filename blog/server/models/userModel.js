const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/daggokgzh/image/upload/v1636607285/artist_hxqtia.png",
    },
    role: {
      type: String,
      default: "user",
    },
    story: {
      type: String,
      default: "",
      maxlength: 200,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);
