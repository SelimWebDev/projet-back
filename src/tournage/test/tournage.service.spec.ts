import { Test } from '@nestjs/testing';
import { TournageService } from '../tournage.service';
import { TournageRepository } from '../tournage.repository';
import { Tournage } from '../tournage.model';

describe('ArrondissementService', () => {
  let tournageService: TournageService;
  const tournageRepository = {
    findAll: jest.fn(),
    findByCode: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [
        TournageService,
        {
          provide: TournageRepository,
          useValue: tournageRepository,
        },
      ],
    }).compile();

    tournageService = moduleRef.get<TournageService>(TournageService);

    jest.clearAllMocks();
  });

  describe('Arrondissement Service getAll', () => {
    let tournageResult: Tournage[];

    //test si arrondissementRepository est appelé et si la valeur reçu est "ok"
    test('then it should call arrondissementRepository and return ok', async () => {
      //Arrange
      tournageRepository.findAll = jest.fn().mockReturnValue('ok');

      // Test
      tournageResult = await tournageService.getAll();

      //Assert
      expect(tournageRepository.findAll).toBeCalled();
      expect(tournageResult).toEqual('ok');
    });
  });

  describe('Tournage Service getTournagesByCode', () => {
    let tournageResult: Tournage[];

    test('then it should call tournageRepository and return ok', async () => {
      //Arrange
      tournageRepository.findByCode = jest.fn().mockReturnValue('ok');

      // Test
      tournageResult = await tournageService.getTournagesByCode('1');

      //Assert
      expect(tournageRepository.findByCode).toBeCalled();
      expect(tournageResult).toEqual('ok');
    });
  });
});
