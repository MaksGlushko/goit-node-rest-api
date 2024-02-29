import { isValidObjectId } from "mongoose";

export const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(
      res.status(404).json({
        message: "Not found!",
      })
    );
  }
  next();
};