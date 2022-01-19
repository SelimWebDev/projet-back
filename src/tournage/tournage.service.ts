import { Injectable } from '@nestjs/common';
import { TournageRepository } from './tournage.repository';

@Injectable()
export class TournageService {
  constructor(private readonly tournageRepository: TournageRepository) {}

  // service pour avoir tous les tournages
  async getAll() {
    let tournages;
    try {
      tournages = await this.tournageRepository.findAll();
    } catch (error) {
      //log nest
      throw new Error('Erreur');
    }

    console.log(tournages);
    return tournages;
  }

  async getTournagesByCode(code: string) {
    let tournages;
    try {
      tournages = await this.tournageRepository.findByCode(code);
    } catch (error) {
      throw new Error('Erreur');
    }
    console.log(tournages);
    return tournages;
  }
}
