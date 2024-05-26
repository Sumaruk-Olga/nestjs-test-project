import { IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  id: string;
  createBy: string;
  @IsOptional()
  @IsString()
  post: string;
}
