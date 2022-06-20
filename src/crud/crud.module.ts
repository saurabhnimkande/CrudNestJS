import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import { Crud, CrudSchema } from './entities/crud.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Crud.name,
        schema: CrudSchema,
      },
    ]),
  ],
  controllers: [CrudController],
  providers: [CrudService],
})
export class CrudModule {}
