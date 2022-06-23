import { Test } from '@nestjs/testing';
import { ArrondissementRepository } from '../users.repository';
import { Arrondissement } from '../users.model';
import { getModelToken } from '@nestjs/mongoose';

describe('ArrondissementRepository', () => {
  let arrondissementRepository: ArrondissementRepository;
  const arrondissementModel = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [
        ArrondissementRepository,
        {
          provide: getModelToken(Arrondissement.name),
          useValue: arrondissementModel,
        },
      ],
    }).compile();

    arrondissementRepository = moduleRef.get<ArrondissementRepository>(
      ArrondissementRepository,
    );

    jest.clearAllMocks();
  });

  describe('Arrondissement Repository getAll', () => {
    let arrondissementResult: Arrondissement[];

    //test si arrondissementRepository est appelé et si la valeur reçu est "ok"
    test('then it should call the arrondissementModel and return ok', async () => {
      //Arrange
      arrondissementModel.find = jest.fn().mockImplementation(() => ({
        exec: jest.fn().mockReturnValue('ok'),
      }));

      // Test
      arrondissementResult = await arrondissementRepository.findAll();

      //Assert
      expect(arrondissementModel.find).toBeCalled();
      expect(arrondissementResult).toEqual('ok');
    });
  });
});
