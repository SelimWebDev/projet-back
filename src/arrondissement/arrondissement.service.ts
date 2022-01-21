import { Injectable, Logger } from '@nestjs/common';
import { ArrondissementRepository } from './arrondissement.repository';

@Injectable()
export class ArrondissementService {
  private readonly logger = new Logger(ArrondissementService.name);

  constructor(
    private readonly arrondissementRepository: ArrondissementRepository,
  ) {}

  // service pour avoir tous les arrondissements
  async getAll() {
    this.logger.log('get all');
    const arrondissements = await this.arrondissementRepository.findAll();
    return arrondissements;
  }
}
