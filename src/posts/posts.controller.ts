import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './schemas/posts.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  @UseGuards(AuthGuard())
  async getAllPosts(): Promise<Posts[]> {
    return this.postsService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard())
  async createPost(
    @Body()
    post: CreatePostDto,
    @Req()
    req,
  ): Promise<Posts> {
    return this.postsService.create(post, req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  async getPost(
    @Param('id')
    id: string,
  ): Promise<Posts> {
    return this.postsService.findById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updatePost(
    @Param('id')
    id: string,
    @Body()
    post: UpdatePostDto,
  ): Promise<Posts> {
    return this.postsService.updateById(id, post);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async deletePost(
    @Param('id')
    id: string,
  ): Promise<Posts> {
    return this.postsService.deleteById(id);
  }
}
