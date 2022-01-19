import { Controller, Get, Param } from '@nestjs/common';
import { TournageService } from './tournage.service';

@Controller('tournages')
export class TournageController {
  constructor(private readonly tournageService: TournageService) {}

  @Get()
  async getAllTournages() {
    const tournages = await this.tournageService.getAll();
    console.log('getAllControlleur');
    return tournages;
  }

  @Get('/arrondissement:id')
  async getTournagesByArrond(@Param('id') arrondissementCode: string) {
    const tournages = await this.tournageService.getTournagesByCode(
      arrondissementCode,
    );
    console.log('getByID controlleur');
    return tournages;
  }
}
