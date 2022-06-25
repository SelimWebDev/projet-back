import { Injectable } from '@nestjs/common';
import { encodePassword } from 'src/utils/bcrypt';
import { CreateUserDTO, User } from './users.model';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async findUser(email: string): Promise<User | undefined> {
    const userFinded = await this.userRepository.findOne(email);
    return userFinded;
  }

  async createUser(userDTO: CreateUserDTO): Promise<User> {
    const password = await encodePassword(userDTO.password);
    const userCreated = await this.userRepository.addToDb({
      ...userDTO,
      password,
    });
    return userCreated;
  }
}
