import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('connection')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  /*@Post('/signup')
  async createUser(@Body() newUser: User): Promise<User> {
    const userCreated = await this.usersService.createUser(newUser);

    return userCreated;
  }*/
}
