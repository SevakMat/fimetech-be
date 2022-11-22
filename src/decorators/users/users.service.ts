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


  async createUser(createUserDto: SignUpDTO): Promise<User> {
    return this.usersRepository.create({
      userId: uuidv4(),
      accessToken: (Math.random() + 1).toString(36).substring(2) as string,
      reffreshToken: (Math.random() + 1).toString(36).substring(2) as string,
      ...createUserDto
    })
  }

  async getUserByEmail(userEmail: string): Promise<any> {
    console.log(userEmail);

    return this.usersRepository.findOne({ userEmail })
  }





  // async getUsers(): Promise<any[]> {
  //   return this.usersRepository.find({});
  // }
  // async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
  //   return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  // }
}