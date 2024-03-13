import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticDataService {
  getStaticData(): string {
    return 'Données statiques';
  }
}