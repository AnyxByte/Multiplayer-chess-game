import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";

import authRoute from "./routes/authRoute.js";
import roomRoute from "./routes/roomRoute.js";
import connectDb from "./connectDb.js";
import auth from "./middlewares/auth.js";
import wss from "./webSockets/wss.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
  })
);

connectDb();

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "server tested successfully",
  });
});

app.use("/auth", authRoute);
// do the middleware thingyy to verify the user
app.use("/room", auth, roomRoute);

const httpServer = app.listen(port, () => {
  console.log("listening on port ", port);
});

export const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST"],
  },
  transports: ["websocket", "polling"],
});

io.on("connection", wss);
