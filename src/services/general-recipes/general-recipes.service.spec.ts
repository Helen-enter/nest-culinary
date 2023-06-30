import { Test, TestingModule } from '@nestjs/testing';
import { GeneralRecipesService } from './general-recipes.service';

describe('GeneralRecipesService', () => {
  let service: GeneralRecipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralRecipesService],
    }).compile();

    service = module.get<GeneralRecipesService>(GeneralRecipesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
