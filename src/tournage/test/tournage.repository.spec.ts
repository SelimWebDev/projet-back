import { Test } from '@nestjs/testing';
import { TournageRepository } from '../tournage.repository';
import { Tournage } from '../tournage.model';
import { getModelToken } from '@nestjs/mongoose';
import { Arrondissement } from '../../arrondissement/arrondissement.model';

describe('TournageRepository', () => {
  let tournageRepository: TournageRepository;
  const tournageModel = {
    find: jest.fn(),
  };
  const arrondissementModel = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [
        TournageRepository,
        {
          provide: getModelToken(Tournage.name),
          useValue: tournageModel,
        },
        {
          provide: getModelToken(Arrondissement.name),
          useValue: arrondissementModel,
        },
      ],
    }).compile();

    tournageRepository = moduleRef.get<TournageRepository>(TournageRepository);

    jest.clearAllMocks();
  });

  describe('Tournage Repository findAll', () => {
    let tournageResult: Tournage[];

    test('then it should call the tournageModel and return ok', async () => {
      //Arrange
      tournageModel.find = jest.fn().mockImplementation(() => ({
        exec: jest.fn().mockReturnValue('ok'),
      }));

      // Test
      tournageResult = await tournageRepository.findAll();

      //Assert
      expect(tournageModel.find).toBeCalled();
      expect(tournageResult).toEqual('ok');
    });
  });

  describe('Tournage Repository findByCode', () => {
    let tournageResult: Tournage[];

    test('then it should call the tournageModel and return ok', async () => {
      //Arrange
      tournageModel.find = jest.fn().mockImplementation(() => ({
        exec: jest.fn().mockReturnValue('ok'),
      }));
      arrondissementModel.findOne = jest.fn().mockReturnValue('exemple');

      // Test
      tournageResult = await tournageRepository.findByCode('1');

      //Assert
      expect(arrondissementModel.findOne).toBeCalled();
      expect(tournageModel.find).toBeCalled();
      expect(tournageResult).toEqual('ok');
    });
  });
});
