import mongoose, { Schema, Document } from 'mongoose';

export interface SensorEventEntity {
  sensorId: string;
  value: number
  createat?: Date
}

export interface ISensorEvent extends Document, SensorEventEntity {}

const sensorEventSchema = new Schema(
  {
    sensorId: {
      type: Schema.Types.ObjectId,
      ref: 'Sensor',
      required: true,
    },
    value: {
      type: Number,
    },
  },
  {
    timestamps: { createdAt: 'createat' },
  },
);

const SensorEvent = mongoose.model<ISensorEvent>('SensorEvent', sensorEventSchema);

export default SensorEvent;
