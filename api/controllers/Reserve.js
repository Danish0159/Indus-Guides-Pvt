import Reserve from "../models/Reserve.js";

export const createReserve = async (req, res, next) => {
  console.log(req.body);
  const newReserve = new Reserve(req.body);
  try {
    const savedReserve = await newReserve.save();
    res.status(200).json(savedReserve);
  } catch (err) {
    next(err);
  }
};
export const getReserves = async (req, res, next) => {
  // try {
  //   const reserves = await Reserve.find();
  //   res.status(200).json(reserves);
  // } catch (err) {
  //   next(err);
  // }
  try {
    const reserves = await Reserve.find()
      .populate("user")
      .populate("hotel")
      .populate("car")
      .populate("room");
    // .exec();
    res.status(200).json(reserves);
  } catch (err) {
    next(err);
  }
};

export const getReserve = async (req, res, next) => {
  try {
    const reserves = await Reserve.find({
      user: req.params.id,
    })
      .populate("user")
      .populate("hotel")
      .populate("car")
      .populate("room");
    // .exec();
    res.status(200).json(reserves);
  } catch (err) {
    next(err);
  }
};
