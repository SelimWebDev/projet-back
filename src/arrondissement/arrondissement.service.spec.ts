import { ArrondissementService } from './arrondissement.service';
import { ArrondissementRepository } from './arrondissement.repository';
import { Arrondissement } from './arrondissement.model';

describe('ArrondissementService', () => {
  let arrondissementService: ArrondissementService;
  let arrondissementRepository: ArrondissementRepository;

  beforeEach(() => {
    arrondissementService = new ArrondissementService(arrondissementRepository);
  });

  describe('getAll', () => {
    it('should return an array of arrondissements', async () => {
      const result: Promise<Arrondissement[]> = [];
      jest
        .spyOn(ArrondissementRepository, 'findAll')
        .mockImplementation(async () => result);

      expect(await arrondissementService.getAll()).toBe(result);
    });
  });
});
