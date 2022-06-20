import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { CrudModule } from './crud/crud.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CrudModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestjs-proj1'),
  ],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
