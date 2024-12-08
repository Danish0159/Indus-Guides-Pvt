import mongoose from "mongoose";
const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  CNIC: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxSeats: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  pickupTime: { type: String, default: null },
  returnTime: { type: String, default: null },
});

export default mongoose.model("Car", CarSchema);
