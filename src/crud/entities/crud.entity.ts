import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Crud extends Document {
  @Prop()
  name: string;

  @Prop()
  dept: string;
}

export const CrudSchema = SchemaFactory.createForClass(Crud);
