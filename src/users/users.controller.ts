import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { User } from 'src/auth/schemas/user.schema';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard())
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @Get(':id')
  @UseGuards(AuthGuard())
  async getUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.usersService.findById(id);
  }
}
