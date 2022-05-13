import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
