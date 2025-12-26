import { Room } from "../models/roomModel.js";

function generateSixDigitCode() {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const handleCreateRoom = async (req, res) => {
  try {
    const uniqueNum = generateSixDigitCode();
    const userId = req.user.userId;

    await Room.create({
      roomCode: uniqueNum,
      createdBy: userId,
    });

    return res.status(200).json({
      msg: "created successfully",
      uniqueNum,
    });
  } catch (error) {
    console.log("handleCreateRoom error", error);

    return res.status(500).json({
      msg: "server error",
    });
  }
};

export const handleJoinRoom = async (req, res) => {
  try {
    const { roomCode } = req.body;

    const roomExists = await Room.findOne({
      roomCode,
    });

    if (roomExists) {
      return res.status(200).json({
        msg: "joining successfull",
      });
    }

    return res.status(400).json({
      msg: "room doesn't exists",
    });
  } catch (error) {
    console.log("handleJoinRoom error", error);
    return res.status(500).json({
      msg: "server error",
    });
  }
};
