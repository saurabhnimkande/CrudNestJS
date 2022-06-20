import { IsString } from 'class-validator';

export class CreateCrudDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly dept: string;
}
