import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Posts } from './schemas/posts.schema';

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

  async create(post: Posts): Promise<Posts> {
    const res = await this.postsModel.create(post);
    return res;
  }

  async findById(id: string): Promise<Posts> {
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
