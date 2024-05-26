import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';

export class CreatePostDto {
  id: string;

  @IsEmpty()
  createdBy: User;

  @IsNotEmpty()
  @IsString()
  post: string;
}
