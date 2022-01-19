import { Tournage } from './tournage.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TournageRepository {
  constructor(
    @InjectModel('Tournage')
    public readonly tournageModel: Model<Tournage>,
  ) {}

  async findAll(): Promise<Tournage[]> {
    return this.tournageModel.find().exec();
  }

  async findByCode(code: string): Promise<Tournage[]> {
    return this.tournageModel.find({ properties: { ardt_lieu: code } });
  }
}
