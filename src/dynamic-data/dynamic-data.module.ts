import { Module } from '@nestjs/common';
import { DynamicDataService } from './dynamic-data.service';

@Module({
  providers: [DynamicDataService],
  exports: [DynamicDataService]
})
export class DynamicDataModule {}
