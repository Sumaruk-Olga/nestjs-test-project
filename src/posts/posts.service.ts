import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Posts } from './schemas/posts.schema';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name)
    private postsModel: mongoose.Model<Posts>,
  ) {}

  async findAll(): Promise<Posts[]> {
    const posts = await this.postsModel.find();
    return posts;
  }

  async create(post: Posts, user: User): Promise<Posts> {
    const data = Object.assign(post, { createdBy: user._id });
    const res = await this.postsModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Posts> {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) {
      throw new BadRequestException('Please, enter correct id');
    }

    const post = await this.postsModel.findById(id);

    if (!post) {
      throw new NotFoundException('Post not found.');
    }

    return post;
  }

  async updateById(id: string, post: Posts): Promise<Posts> {
    return await this.postsModel.findByIdAndUpdate(id, post, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Posts> {
    return await this.postsModel.findByIdAndDelete(id);
  }
}
