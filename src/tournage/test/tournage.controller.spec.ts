import { TournageController } from '../tournage.controller';
import { TournageService } from '../tournage.service';
import { Test } from '@nestjs/testing';
import { Tournage } from '../tournage.model';

describe('ArrondissementController', () => {
  let tournageController: TournageController;
  const tournageService = {
    getAll: jest.fn(),
    getTournagesByCode: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [TournageController],
      providers: [
        {
          provide: TournageService,
          useValue: tournageService,
        },
      ],
    }).compile();

    tournageController = moduleRef.get<TournageController>(TournageController);

    jest.clearAllMocks();
  });

  describe('When getAllTournage is called', () => {
    let tournageResult: Tournage[];

    //test si arrondissementService est appelé et si la valeur reçu est "ok"
    test('then it should call tournageService.getAll and return ok', async () => {
      //Arrange
      tournageService.getAll = jest.fn().mockReturnValue('ok');

      // Test
      tournageResult = await tournageController.getAllTournages();

      //Assert
      expect(tournageService.getAll).toBeCalled();
      expect(tournageResult).toEqual('ok');
    });
  });

  describe('When getTournagesByArrond is called', () => {
    let tournageResult: Tournage[];

    test('then it should call tournageService.getTournagesByCode and return ok', async () => {
      //Arrange
      tournageService.getTournagesByCode = jest.fn().mockReturnValue('ok');

      // Test
      tournageResult = await tournageController.getTournagesByArrond('1');

      //Assert
      expect(tournageService.getTournagesByCode).toBeCalled();
      expect(tournageResult).toEqual('ok');
    });
  });
});
