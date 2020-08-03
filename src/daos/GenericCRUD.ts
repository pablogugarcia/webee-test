import { Document, Model, CreateQuery } from 'mongoose';

export class GenericCRUD<
  ENT,
  DOC extends Document & ENT,
  MOD extends Model<DOC>
> {
  Model: MOD;

  constructor(Sensor: MOD) {
    this.Model = Sensor;
  }

  create(newDoc: CreateQuery<DOC>): Promise<DOC> {
    return this.Model.create(newDoc);
  }

  removeOne(id: string): Promise<DOC | null> {
    return this.Model.findByIdAndRemove(id).exec();
  }

  updateOne(id: string, newDoc: ENT): Promise<DOC | null> {
    return this.Model.findByIdAndUpdate({ _id: id }, newDoc, {
      omitUndefined: true,
      new: true,
    }).exec();
  }

  list(): Promise<DOC[]> {
    return this.Model.find().exec();
  }
}
