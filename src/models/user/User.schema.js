import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "task must be provided"],
      unique: 1,
      index: 1,
    },
  },
  { timestamps: true }
);

const userList = mongoose.model("User", UserSchema);
export default userList;
