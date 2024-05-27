import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
