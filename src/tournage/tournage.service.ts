import { Injectable } from '@nestjs/common';
import { TournageRepository } from './tournage.repository';

@Injectable()
export class TournageService {
  constructor(private readonly tournageRepository: TournageRepository) {}

  // service pour avoir tous les tournages
  async getAll() {
    const tournages = await this.tournageRepository.findAll();
    return tournages;
  }

  async getTournagesByCode(code: string) {
    const tournages = await this.tournageRepository.findByCode(code);
    return tournages;
  }
}
