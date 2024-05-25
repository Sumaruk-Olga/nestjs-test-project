import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './schemas/posts.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<Posts[]> {
    return this.postsService.findAll();
  }

  @Post()
  async createPost(
    @Body()
    post: CreatePostDto,
  ): Promise<Posts> {
    return this.postsService.create(post);
  }

  @Get(':id')
  async getPost(
    @Param('id')
    id: string,
  ): Promise<Posts> {
    return this.postsService.findById(id);
  }

  @Put(':id')
  async updatePost(
    @Param('id')
    id: string,
    @Body()
    post: UpdatePostDto,
  ): Promise<Posts> {
    return this.postsService.updateById(id, post);
  }

  @Delete(':id')
  async deletePost(
    @Param('id')
    id: string,
  ): Promise<Posts> {
    return this.postsService.deleteById(id);
  }
}
