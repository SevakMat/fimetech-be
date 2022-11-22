import { SignUpDTO } from "@modules/auth/dto/sign-up.dto";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";

import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async findOne(userFilterQuery: FilterQuery<any>): Promise<any> {
    return this.userModel.findOne(userFilterQuery);
  }

  async find(usersFilterQuery: FilterQuery<any>): Promise<User[]> {
    return this.userModel.find(usersFilterQuery)
  }

  async create(user: SignUpDTO): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save()
  }

  async findOneAndUpdate(userFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User> {
    return this.userModel.findOneAndUpdate(userFilterQuery, user, { new: true });
  }
}
