import mongoose, { Schema } from 'mongoose';
import { sensorSchema } from './Sensor.model';

const sensorEventSchema = new Schema(
  {
    sensorId: sensorSchema,
    value: {
      type: Number,
    },
  },
  {
    timestamps: { createdAt: 'createat' },
  },
);

const SensorEvent = mongoose.model('Sensor', sensorEventSchema);

export default SensorEvent;
