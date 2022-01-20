import { TournageController } from './tournage.controller';
import { TournageService } from './tournage.service';
import { TournageRepository } from './tournage.repository';

describe('ArrondissementController', () => {
  let tournageController: TournageController;
  let tournageService: TournageService;
  let tournageRepository: TournageRepository;

  beforeEach(() => {
    tournageService = new TournageService(tournageRepository);
    tournageController = new TournageController(tournageService);
  });

  describe('findAll', () => {
    it('should return an array of tournage', async () => {
      const result = [];
      jest
        .spyOn(tournageService, 'getAll')
        .mockImplementation(async () => result);

      expect(await tournageController.getAllTournages()).toBe(result);
    });
  });
});
