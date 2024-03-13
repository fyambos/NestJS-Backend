import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from './mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [mongoConfig] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongo.uri'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MongooseConfigModule {}
