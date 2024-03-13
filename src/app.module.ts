import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticDataModule } from './static-data/static-data.module';
import { DynamicDataModule } from './dynamic-data/dynamic-data.module';
import { DataController } from './data/data.controller';

@Module({
  imports: [StaticDataModule, DynamicDataModule],
  controllers: [AppController, DataController],
  providers: [AppService],
})
export class AppModule {}
