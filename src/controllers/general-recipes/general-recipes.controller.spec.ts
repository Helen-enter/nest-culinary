import { Test, TestingModule } from '@nestjs/testing';
import { GeneralRecipesController } from './general-recipes.controller';

describe('GeneralRecipesController', () => {
  let controller: GeneralRecipesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralRecipesController],
    }).compile();

    controller = module.get<GeneralRecipesController>(GeneralRecipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
