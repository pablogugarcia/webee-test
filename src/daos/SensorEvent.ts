import SensorEvent, {
  ISensorEvent,
  SensorEventEntity,
} from '@models/SensorEvent.model';
import { GenericCRUD } from './GenericCRUD';

interface ISensorEventDAO {
  Model: typeof SensorEvent;
  removeOne: (id: string) => Promise<ISensorEvent | null>;
  updateOne: (id: string, newDoc: ISensorEvent) => Promise<ISensorEvent | null>;
  list: () => Promise<Pick<ISensorEvent, SensorEventEntity & '_id'>[]>;
  create: (newDoc: SensorEventEntity) => Promise<ISensorEvent>;
}

class SensorEventDao
  extends GenericCRUD<SensorEventEntity, ISensorEvent, typeof SensorEvent>
  implements ISensorEventDAO {
  listAndPopulate() {
    return this.Model.find().populate('sensorId').exec();
  }

  getAllById(id: string) {
    return this.Model.find({ sensorId: id }).exec();
  }
}

export default new SensorEventDao(SensorEvent);
