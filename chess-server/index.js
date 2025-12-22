import express from "express";
import cors from "cors";

import authRoute from "./routes/authRoute.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
  })
);

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "server tested successfully",
  });
});

app.use("/auth", authRoute);

app.listen(port, () => {
  console.log("listening on port ", port);
});
