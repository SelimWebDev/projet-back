import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export class User extends mongoose.Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}