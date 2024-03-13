import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHomePage(): string {
    return `
      <html>
      <head>
        <title>Accueil - Projet Backend NestJS</title>
      </head>
      <body>
        <h1>Projet Backend NestJS</h1>
        <p>Pour gérer les journaux de bords de bateaux</p>
        <p>Données statiques <a href="/data/static">ici</a>.</p>
        <p>Données dynamiques <a href="/data/dynamic">ici</a>.</p>
      </body>
      </html>
    `;
  }
}
