import { ArrondissementController } from './arrondissement.controller';
import { ArrondissementService } from './arrondissement.service';
import { ArrondissementRepository } from './arrondissement.repository';

describe('ArrondissementController', () => {
  let arrondissementController: ArrondissementController;
  let arrondissementService: ArrondissementService;
  let arrondissementRepository: ArrondissementRepository;

  beforeEach(() => {
    arrondissementService = new ArrondissementService(arrondissementRepository);
    arrondissementController = new ArrondissementController(
      arrondissementService,
    );
  });

  describe('findAll', () => {
    it('should return an array of arrondissements', async () => {
      const result = [];
      jest
        .spyOn(arrondissementService, 'getAll')
        .mockImplementation(async () => result);

      expect(await arrondissementController.getAllArrondissements()).toBe(
        result,
      );
    });
  });
});
