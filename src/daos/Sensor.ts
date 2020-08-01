import SensorModel, { ISensor, SensorEntity } from '@models/Sensor.model';

interface ISensorDao {
  Model: typeof SensorModel;
  removeOne: (id: string) => Promise<ISensor | null>;
  updateOne: (id: string, newDoc: ISensor) => Promise<ISensor | null>;
  list: () => Promise<Pick<ISensor, SensorEntity & '_id'>[]>;
  create: (newDoc: SensorEntity) => Promise<ISensor>;
}

class SensorDao implements ISensorDao {
  Model: typeof SensorModel;

  constructor(Sensor: typeof SensorModel) {
    this.Model = Sensor;
  }

  create(newDoc: SensorEntity) {
    return this.Model.create(newDoc);
  }

  getOne() {
    return this.Model.findOne().exec();
  }

  removeOne(id: string) {
    return this.Model.findByIdAndRemove(id).exec();
  }

  updateOne(id: string, newDoc: SensorEntity) {
    return this.Model.findByIdAndUpdate({ _id: id }, newDoc, {
      omitUndefined: true,
      new: true,
    }).exec();
  }

  list() {
    return this.Model.find().exec();
  }
}

export default new SensorDao(SensorModel);
