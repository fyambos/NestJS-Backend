import { Controller, Get } from '@nestjs/common';
import { StaticDataService } from '../static-data/static-data.service';
import { DynamicDataService } from '../dynamic-data/dynamic-data.service';

@Controller('data')
export class DataController {
  constructor(
    private readonly staticDataService: StaticDataService,
    private readonly dynamicDataService: DynamicDataService,
  ) {}

}
