import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hash } from 'argon2'
import { User, UserDocument } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ){}

  async create(createUserInput: CreateUserInput) {
    createUserInput.password = await hash(createUserInput.password)
    const document = new this.userModel(createUserInput)
    return await document.save()
  }

  async findAll() {
    return await this.userModel.find()
  }

  async findOne(id: string) {
    return await this.userModel.findById(id)
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput)
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id)
  }
}
