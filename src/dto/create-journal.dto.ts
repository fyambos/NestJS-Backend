import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateJournalDto {
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  weather: string;

  @IsNotEmpty()
  @IsString()
  events: string;
}
