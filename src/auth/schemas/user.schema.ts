import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  id: string;

  @Prop({ required: true }) // { required: true, match: /^[a-zA-Zа-яА-Я]+\s+[a-zA-Zа-яА-Я]+$/, minlength: 3, maxlength: 100 }
  name: string;

  @Prop({ required: true, unique: true }) //  unique:[true, 'Duplicate email entered']
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
