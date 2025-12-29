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

const port = process.env.PORT;

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connectDb();

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "server tested successfully",
  });
});

app.use("/auth", authRoute);
app.use("/room", auth, roomRoute);

const httpServer = app.listen(port, () => {
  console.log("listening on port ", port);
});

const io = new Server(httpServer, {
  cors: corsOptions,
});

// change this using old project config

wss(io);
