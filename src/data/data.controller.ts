import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { StaticDataService } from '../static-data/static-data.service';
import { DynamicDataService } from '../dynamic-data/dynamic-data.service';
import { CreateJournalDto } from '../dto/create-journal.dto';

@Controller('data')
export class DataController {
  constructor(
    private readonly staticDataService: StaticDataService,
    private readonly dynamicDataService: DynamicDataService,
  ) {}

  @Get('static')
  getStaticData(): string {
    return this.staticDataService.getStaticData();
  }

  @Get('dynamic')
  getDynamicData(): string {
    return this.dynamicDataService.getDynamicData();
  }

  @Post('journal')
  @UsePipes(new ValidationPipe()) // Utilisation du ValidationPipe pour valider les données
  addJournalEntry(@Body() entryData: CreateJournalDto): string {
    return this.dynamicDataService.addJournalEntry(entryData);
  }
}
