import { User } from './users.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel('Arrondissement')
    public readonly userModel: Model<User>,
  ) {}

  async findOne(email: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({ email: email }).exec();
      return user;
    } catch (error) {
      return error;
    }
  }

  /*async createOne(user: User): Promise<User> {
    try {
      const user = await this.userModel.create(user).exec();
    } catch (error) {
      return error;
    }
  }*/
}
