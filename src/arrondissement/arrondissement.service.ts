/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ArrondissementRepository } from './arrondissement.repository';

@Injectable()
export class ArrondissementService {

  constructor(
    private readonly arrondissementRepository: ArrondissementRepository
  ) {}
 
  // service pour avoir tous les arrondissements
  async getAll() {
    const arrondissements = await this.arrondissementRepository.findAll()
    console.log(arrondissements);
    return arrondissements
  }
}
