import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userAdapter } from './adapters';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const encryptedUser = await userAdapter.handleCreateUser(createUserDto)
    const user = new this.userModel(encryptedUser)
    return user.save();
  }

  async findAll() {
    return this.userModel.find().select("-password")
  }

  async findOne(id: string) {
    return this.userModel.findById(id).select("-password");
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(
      {
        _id: id,
      }, 
      {
        $set: updateUserDto
      }, 
      {
        new: true,
      },
    ).select("-password")
  }

  async remove(id: string) {
    await this.userModel.deleteOne({
      _id: id
    }).exec();
  }
}
