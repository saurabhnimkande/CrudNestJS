import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Get('pagination')
  pagination(@Query() queryParams) {
    const { offset, limit } = queryParams;
    return `the offset is ${offset} and the limit is ${limit}`;
  }

  @Get('data')
  getData() {
    return this.crudService.getData();
  }

  @Get(':id')
  getRandom(@Param('id') id) {
    return this.crudService.getRandom(id);
  }

  @Post('data')
  @HttpCode(HttpStatus.CREATED)
  returnData(@Body() createCrudDto: CreateCrudDto) {
    return this.crudService.returnData(createCrudDto);
  }

  @Patch(':id')
  update(@Param('id') id, @Body() updateCrudDto: UpdateCrudDto) {
    return this.crudService.update(id, updateCrudDto);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.crudService.delete(id);
  }
}
