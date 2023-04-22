import { Test, TestingModule } from '@nestjs/testing';
import { GestionnaireCvController } from './gestionnaire-cv.controller';
import { GestionnaireCvService } from './gestionnaire-cv.service';

describe('GestionnaireCvController', () => {
  let controller: GestionnaireCvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestionnaireCvController],
      providers: [GestionnaireCvService],
    }).compile();

    controller = module.get<GestionnaireCvController>(GestionnaireCvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
