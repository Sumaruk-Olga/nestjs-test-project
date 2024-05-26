import { IsEmpty, IsOptional, IsString } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';

export class UpdatePostDto {
  id: string;

  @IsEmpty()
  createBy: User;

  @IsOptional()
  @IsString()
  post: string;
}
