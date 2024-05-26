import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

@Schema({
  timestamps: true,
})
export class Posts {
  @Prop()
  id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  createBy: User;

  @Prop({ required: true, minlength: 3, maxlength: 250 })
  post: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
