import { Tournage } from './tournage.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TournageRepository {
  constructor(
    @InjectModel('Tournage')
    public readonly tournageModel: Model<Tournage>,
  ) {}

  async findAll(): Promise<Tournage[]> {
    const tournages = await this.tournageModel.find().exec();
    if (!tournages) {
      throw new NotFoundException();
    } else return tournages;
  }

  async findByCode(code: string): Promise<Tournage[]> {
    const tournages = await this.tournageModel
      .find({ 'properties.ardt_lieu': code })
      .exec();
    console.log(tournages.length);
    if (!tournages || tournages.length == 0) {
      throw new NotFoundException();
    } else return tournages;
  }
}
