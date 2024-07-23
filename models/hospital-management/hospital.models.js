import mongoose from 'mongoose';

const hospitalSchema = new mongooseSchema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specilizedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamp: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
