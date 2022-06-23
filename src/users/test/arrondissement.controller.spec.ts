import { ArrondissementController } from '../users.controller';
import { ArrondissementService } from '../users.service';
import { Test } from '@nestjs/testing';
import { Arrondissement } from '../users.model';

describe('ArrondissementController', () => {
  let arrondissementController: ArrondissementController;
  const arrondissementService = {
    getAll: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [ArrondissementController],
      providers: [
        {
          provide: ArrondissementService,
          useValue: arrondissementService,
        },
      ],
    }).compile();

    arrondissementController = moduleRef.get<ArrondissementController>(
      ArrondissementController,
    );

    jest.clearAllMocks();
  });

  describe('When getAllArrondissement is called', () => {
    let arrondissementResult: Arrondissement[];

    //test si arrondissementService est appelé et si la valeur reçu est "ok"
    test('then it should call arrondissementService and return ok', async () => {
      //Arrange
      arrondissementService.getAll = jest.fn().mockReturnValue('ok');

      // Test
      arrondissementResult =
        await arrondissementController.getAllArrondissements();

      //Assert
      expect(arrondissementService.getAll).toBeCalled();
      expect(arrondissementResult).toEqual('ok');
    });
  });
});
