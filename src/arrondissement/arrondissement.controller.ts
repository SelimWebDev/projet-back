import { Controller, Get } from '@nestjs/common';
import { Arrondissement } from './arrondissement.model';
import { ArrondissementService } from './arrondissement.service';

@Controller('arrondissements')
export class ArrondissementController {
  constructor(private readonly arrondissementService: ArrondissementService) {}

  @Get()
  async getAllArrondissements(): Promise<Arrondissement[]> {
    const arrondissements = await this.arrondissementService.getAll();
    return arrondissements;
  }
}
