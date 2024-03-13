import { Test, TestingModule } from '@nestjs/testing';
import { DynamicDataService } from './dynamic-data.service';

describe('DynamicDataService', () => {
  let service: DynamicDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamicDataService],
    }).compile();

    service = module.get<DynamicDataService>(DynamicDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
