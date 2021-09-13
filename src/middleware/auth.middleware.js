import { getUserById } from "../models/user/User.model.js";
export const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const user = await getUserById(authorization);
      if (user?._id) {
        return next();
      }
    }
    res.status(403).json({
      status: "error",
      message: "Unauthorized",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "error", message: "error, there was some issue" });
  }
};
