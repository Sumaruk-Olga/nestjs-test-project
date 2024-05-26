import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  id: string;

  createBy: string;

  @IsNotEmpty()
  @IsString()
  post: string;
}
