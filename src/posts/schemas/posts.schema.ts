import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Posts {
  @Prop()
  id: string;

  @Prop()
  createBy: string;

  @Prop()
  post: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
