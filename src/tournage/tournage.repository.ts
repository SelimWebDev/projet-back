import { Tournage } from './tournage.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Arrondissement } from 'src/arrondissement/arrondissement.model';

@Injectable()
export class TournageRepository {
  constructor(
    @InjectModel('Tournage')
    public readonly tournageModel: Model<Tournage>,

    @InjectModel('Arrondissement')
    public readonly arrondissementModel: Model<Arrondissement>,
  ) {}

  async findAll(): Promise<Tournage[]> {
    const tournages = await this.tournageModel.find().exec();
    if (!tournages) {
      throw new NotFoundException();
    } else return tournages;
  }

  async findByCode(code: string): Promise<Tournage[]> {
    const arrondissement: Arrondissement =
      await this.arrondissementModel.findOne({
        'properties.c_ar': code,
      });

    const tournages = await this.tournageModel
      .find({
        geometry: { $geoWithin: { $geometry: arrondissement.geometry } },
      })
      .exec();
    console.log(arrondissement.geometry);
    return tournages;
  }
}
