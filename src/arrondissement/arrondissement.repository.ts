import { Arrondissement } from './arrondissement.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArrondissementRepository {
  constructor(
    @InjectModel('Arrondissement')
    public readonly arrondissementModel: Model<Arrondissement>,
  ) {}

  async findAll(): Promise<Arrondissement[]> {
    const arrondissements = this.arrondissementModel.find().exec();
    if (!arrondissements) {
      throw new NotFoundException();
    } else return arrondissements;
  }
}
