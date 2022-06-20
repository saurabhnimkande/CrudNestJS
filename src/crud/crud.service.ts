import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Crud } from './entities/crud.entity';
import { Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CrudService {
  constructor(
    @InjectModel(Crud.name) private readonly crudModel: Model<Crud>,
  ) {}

  pagination(@Query() queryParams) {
    const { offset, limit } = queryParams;
    return `the offset is ${offset} and the limit is ${limit}`;
  }

  getData() {
    return this.data;
  }

  getRandom(id: number) {
    let new_data = this.data.filter((el) => el.id == id);
    if (!new_data[0]) {
      throw new HttpException(`ID NOT FOUND ${id}`, HttpStatus.NOT_FOUND);
    }
    return new_data[0];
  }

  returnData(body) {
    this.data = [...this.data, body];
    return this.data;
  }

  update(id, body) {
    let new_arr = this.data.map((el) =>
      el.id == id ? { ...el, ...body } : el,
    );
    return new_arr;
  }

  delete(id) {
    this.data = this.data.filter((el) => el.id != id);
    return this.data;
  }
}
