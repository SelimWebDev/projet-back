import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TournageController } from './tournage.controller';
import { TournageService } from './tournage.service';
import { TournageSchema } from './tournage.model';
import { TournageRepository } from './tournage.repository';
import { ArrondissementSchema } from 'src/arrondissement/arrondissement.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tournage', schema: TournageSchema },
      { name: 'Arrondissement', schema: ArrondissementSchema },
    ]),
  ],
  controllers: [TournageController],
  providers: [TournageService, TournageRepository],
})
export class TournageModule {}
