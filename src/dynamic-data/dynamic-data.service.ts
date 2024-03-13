import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicDataService {
  getDynamicData(): string {
    return 'Données dynamiques';
  }
}