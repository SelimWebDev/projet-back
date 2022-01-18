import { Controller, Get } from '@nestjs/common';
import { ArrondissementService } from './arrondissement.service';

@Controller('arrondissements')
export class ArrondissementController {
  constructor(private readonly arrondissementService: ArrondissementService) {}

  @Get()
  async getAllArrondissements() {
    const products = await this.arrondissementService.getAll();
    return products;
  }
}
