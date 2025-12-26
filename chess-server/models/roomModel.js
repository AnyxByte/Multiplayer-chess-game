import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  roomCode: {
    type: Number,
    required: true,
    unique: true,
  },
  createdBy: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Room = mongoose.model("Room", roomSchema);
