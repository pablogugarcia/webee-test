import mongoose, { Schema } from 'mongoose';
import AutoIncrement from 'mongoose-sequence';

const sensorEventSchema = new Schema(
  {
    sensorId: { type: Number, required: true, unique: true },
    value: {
      type: Number,
    },
  },
  {
    timestamps: { createdAt: 'createat' },
  },
);

sensorEventSchema.plugin(AutoIncrement, { inc_field: 'sensorId' });

const SensorEvent = mongoose.model('Sensor', sensorEventSchema);

export default SensorEvent;
