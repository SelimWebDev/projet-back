import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArrondissementController } from './arrondissement.controller';
import { ArrondissementService } from './arrondissement.service';
import { ArrondissementSchema } from './arrondissement.model';
import { ArrondissementRepository } from './arrondissement.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Arrondissement', schema: ArrondissementSchema },
    ]),
  ],
  controllers: [ArrondissementController],
  providers: [ArrondissementService, ArrondissementRepository],
})
export class ArrondissementModule {}
