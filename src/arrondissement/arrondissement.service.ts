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
    let arrondissements
    try {
      arrondissements = await this.arrondissementRepository.findAll()
    } catch(error) {
      //log nest
      throw new Error('Erreur');
    }
    
    console.log(arrondissements);
    return arrondissements
  }
}
