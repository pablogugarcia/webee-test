import mongoose, { Schema, Document } from 'mongoose';

export interface SensorEntity {
  name: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  active: boolean;
  minval: number;
  maxval: number;
}

export interface ISensor extends Document, SensorEntity {}

const sensorSchema = new Schema({
  name: { type: String, required: true, unique: true },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  active: {
    type: Boolean,
    default: false,
  },
  minval: {
    type: Number,
  },
  maxval: {
    type: Number,
  },
});

const Sensor = mongoose.model<ISensor>('Sensor', sensorSchema);

export default Sensor;
