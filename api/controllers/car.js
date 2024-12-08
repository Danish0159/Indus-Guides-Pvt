import Car from "../models/Car.js";
export const createCar = async (req, res, next) => {
  const newCar = new Car(req.body);
  try {
    const savedCar = await newCar.save();
    res.status(200).json(savedCar);
  } catch (err) {
    next(err);
  }
};
export const patchCar = async (req, res, next) => {
  try {
    let { pickupTime, returnTime } = req.body;

    Car.findByIdAndUpdate(
      req.params.id,
      {
        pickupTime,
        returnTime,
      },
      { new: true },
      (err, updatedModel) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: "Failed to update the resource." });
        } else if (!updatedModel) {
          res.status(404).json({ error: "Resource not found." });
        } else {
          res.status(200).json(updatedModel);
        }
      }
    );
  } catch (err) {
    next(err);
  }
};
export const updateCar = async (req, res, next) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCar);
  } catch (err) {
    next(err);
  }
};
export const deleteCar = async (req, res, next) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json("Car has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCar = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
};
export const getCars = async (req, res, next) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
};
