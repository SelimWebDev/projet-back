import { ArrondissementController } from '../arrondissement.controller';
import { ArrondissementService } from '../arrondissement.service';
import { Test } from '@nestjs/testing';
import { Arrondissement } from '../arrondissement.model';

jest.mock('../arrondissement.service');

describe('ArrondissementController', () => {
  let arrondissementController: ArrondissementController;
  let arrondissementService: ArrondissementService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [ArrondissementController],
      providers: [ArrondissementService],
    }).compile();

    arrondissementController = moduleRef.get<ArrondissementController>(
      ArrondissementController,
    );
    arrondissementService = moduleRef.get<ArrondissementService>(
      ArrondissementService,
    );

    jest.clearAllMocks();
  });

  describe('getAllArrondissements', () => {
    describe('When getAllArrondissement is called', () => {
      let arrondissementResult: Arrondissement[]; //string car le mock servie est utilisé
      //mais getAllArrondissement renvoie Arrondissiement[]
      beforeEach(async () => {
        arrondissementResult =
          await arrondissementController.getAllArrondissements(); // ="ok" car le mock service est utilisé
      });
      //test si arrondissementService est appelé
      test('then it should call arrondissementService', () => {
        expect(arrondissementService.getAll).toBeCalled();
      });
      //test si le resultat est bien la valeur attendu
      test('then it should return an array of Arrondissement', () => {
        expect(arrondissementResult).toEqual('ok');
      });
    });
  });
});
