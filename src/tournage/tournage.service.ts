import { Injectable, Logger } from '@nestjs/common';
import { TournageRepository } from './tournage.repository';

@Injectable()
export class TournageService {
  private readonly logger = new Logger(TournageService.name);

  constructor(private readonly tournageRepository: TournageRepository) {}

  // service pour avoir tous les tournages
  async getAll() {
    this.logger.log('get all');
    const tournages = await this.tournageRepository.findAll();
    return tournages;
  }

  async getTournagesByCode(code: string) {
    this.logger.log('get tournages by code');
    const tournages = await this.tournageRepository.findByCode(code);
    return tournages;
  }
}
