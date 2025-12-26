import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;

    const bearerSplit = bearerToken.split(" ");

    const token = bearerSplit[1];

    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Unauthorized",
    });
  }
};

export default auth;
