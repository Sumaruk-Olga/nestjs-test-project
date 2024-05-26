import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const regExp = /^[a-zA-Zа-яА-Я]+\s+[a-zA-Zа-яА-Я]+$/;
@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  id: string;

  @Prop({ required: true, minlength: 3, maxlength: 50, match: regExp })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
