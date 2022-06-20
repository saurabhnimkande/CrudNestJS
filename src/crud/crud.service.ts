import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Crud } from './entities/crud.entity';
import { Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCrudDto } from './dto/create-crud.dto';

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
    return this.crudModel.find().exec();
  }

  async getRandom(id: string) {
    const crud = await this.crudModel.findOne({ _id: id }).exec();
    if (!crud) {
      throw new NotFoundException(`curd ${id} not found`);
    }
    return crud;
  }

  returnData(body: CreateCrudDto) {
    const crud = new this.crudModel(body);
    return crud.save();
  }

  async update(id: string, body: any) {
    const prevCrud = await this.crudModel
      .findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
      .exec();

    if (!prevCrud) {
      throw new NotFoundException(`Crud ${id} not found`);
    }

    return prevCrud;
  }

  async delete(id: string) {
    const crud = await this.crudModel.findOne({ _id: id });
    return crud.remove();
  }
}
