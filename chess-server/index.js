import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "server tested successfully",
  });
});


app.listen(port, () => {
  console.log("listening on port ", port);
});
