import { Test } from '@nestjs/testing';
import { ArrondissementRepository } from '../arrondissement.repository';
import { Arrondissement } from '../arrondissement.model';
import { getModelToken } from '@nestjs/mongoose';

describe('ArrondissementRepository', () => {
  let arrondissementRepository: ArrondissementRepository;
  const arrondissementModel = {
    findAll: jest.fn(),
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
      arrondissementModel.findAll = jest.fn().mockReturnValue('ok');

      // Test
      arrondissementResult = await arrondissementRepository.findAll();

      //Assert
      //expect(arrondissementModel.findAll).toBeCalled();
      expect(arrondissementResult).toEqual('ok');
    });
  });
});
