import { Test, TestingModule } from '@nestjs/testing';
import { GestionnaireCvService } from './gestionnaire-cv.service';

describe('GestionnaireCvService', () => {
  let service: GestionnaireCvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestionnaireCvService],
    }).compile();

    service = module.get<GestionnaireCvService>(GestionnaireCvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
