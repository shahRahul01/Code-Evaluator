import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
  profilePic: string;
  name: string;
  role: string;
  ranking?: number;
  collegeName?: string;
  totalPoints?: number;
}

const userSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
    default:
      "https://res.cloudinary.com/dwwu5sx8s/image/upload/v1738571616/samples/man-portrait.jpg",
  },
  name: {
    type: String,
    required: true, // Fixed typo
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  ranking: {
    type: Number,
  },
  collegeName: {
    type: String,
  },
  totalPoints: {
    type: Number,
  },
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
export default User;
