import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

UserSchema.plugin(uniqueValidator);

export class User extends mongoose.Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class CreateUserDTO {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
