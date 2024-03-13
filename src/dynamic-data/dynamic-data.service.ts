import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateJournalDto } from '../dto/create-journal.dto';

@Injectable()
export class DynamicDataService {
  getDynamicData(): string {
    return 'Données dynamiques';
  }

  addJournalEntry(entryData: CreateJournalDto): string {
    const isValid = this.validateEntryData(entryData);
    if (!isValid) {
      throw new BadRequestException('Données d\'entrée non valides');
    }
    const journalEntry = {
        date: entryData.date,
        location: entryData.location,
        weather: entryData.weather,
        events: entryData.events,
      };
    return JSON.stringify(journalEntry); //pour le moment, implementation mongo db par la suite
  }

  private validateEntryData(entryData: CreateJournalDto): boolean {
    if (!entryData.date || !entryData.location || !entryData.weather || !entryData.events) {
      return false;
    }
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(entryData.date)) {
      return false;
    }
    return true;
  }
}
