import { Arrondissement } from './arrondissement.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArrondissementRepository {
  constructor(
    @InjectModel('Arrondissement')
    public readonly arrondissementModel: Model<Arrondissement>,
  ) {}

  async findAll(): Promise<Arrondissement[]> {
    //try catch gestion erreur mongoose
    try {
      const arrondissements = await this.arrondissementModel.find().exec();
      return arrondissements;
    } catch (error) {
      return error;
    }
  }
}
