import SensorModel, { ISensor, SensorEntity } from '@models/Sensor.model';
import { GenericCRUD } from './GenericCRUD';

interface ISensorDao {
  Model: typeof SensorModel;
  removeOne: (id: string) => Promise<ISensor | null>;
  updateOne: (id: string, newDoc: ISensor) => Promise<ISensor | null>;
  list: () => Promise<Pick<ISensor, SensorEntity & '_id'>[]>;
  create: (newDoc: SensorEntity) => Promise<ISensor>;
}

class SensorDao extends GenericCRUD<SensorEntity, ISensor, typeof SensorModel>
  implements ISensorDao {}

export default new SensorDao(SensorModel);
