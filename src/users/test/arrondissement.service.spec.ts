import { Test } from '@nestjs/testing';
import { ArrondissementService } from '../users.service';
import { ArrondissementRepository } from '../users.repository';
import { Arrondissement } from '../users.model';

describe('ArrondissementService', () => {
  let arrondissementService: ArrondissementService;
  const arrondissementRepository = {
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [
        ArrondissementService,
        {
          provide: ArrondissementRepository,
          useValue: arrondissementRepository,
        },
      ],
    }).compile();

    arrondissementService = moduleRef.get<ArrondissementService>(
      ArrondissementService,
    );

    jest.clearAllMocks();
  });

  describe('Arrondissement Service getAll', () => {
    let arrondissementResult: Arrondissement[];

    //test si arrondissementRepository est appelé et si la valeur reçu est "ok"
    test('then it should call arrondissementRepository and return ok', async () => {
      //Arrange
      arrondissementRepository.findAll = jest.fn().mockReturnValue('ok');

      // Test
      arrondissementResult = await arrondissementService.getAll();

      //Assert
      expect(arrondissementRepository.findAll).toBeCalled();
      expect(arrondissementResult).toEqual('ok');
    });
  });
});
