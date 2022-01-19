/* eslint-disable prettier/prettier */
import {
    Controller,
    Get
} from '@nestjs/common';
import { ArrondissementService } from './arrondissement.service';
  
@Controller('arrondissements')
export class ArrondissementController {
    constructor(private readonly arrondissementService: ArrondissementService) {}
  
    @Get() 
    async getAllArrondissements() {
      const arrondissements = await this.arrondissementService.getAll(); 
      return arrondissements;
    }    
}
  