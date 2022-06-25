import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { UserSchema } from './users.model';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
