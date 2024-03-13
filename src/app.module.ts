import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticDataModule } from './static-data/static-data.module';
import { DynamicDataModule } from './dynamic-data/dynamic-data.module';
import { DataController } from './data/data.controller';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [StaticDataModule, DynamicDataModule],
  controllers: [DataController, AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
} 
