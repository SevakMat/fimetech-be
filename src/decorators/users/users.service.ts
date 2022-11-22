import { SignUpDTO } from "@modules/auth/dto/sign-up.dto";
import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async getUserById(userId: string): Promise<any> {
    return this.usersRepository.findOne({ userId })
  }

  async getUsers(): Promise<any[]> {
    return this.usersRepository.find({});
  }

  async createUser(createUserDto: SignUpDTO): Promise<User> {
    return this.usersRepository.create({
      userId: uuidv4(),
      ...createUserDto
    })
  }

  // async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
  //   return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  // }
}