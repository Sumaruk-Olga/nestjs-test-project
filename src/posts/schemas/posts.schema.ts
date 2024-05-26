import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Posts {
  @Prop()
  id: string;

  @Prop()
  createBy: string; //  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true }) createdBy: User;

  @Prop()
  post: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
