import { Injectable } from '@nestjs/common';
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { ModuleRef } from "@nestjs/core";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email)
    if (!user || user.password !== password) return false;
    return user;
}

    sign(user: any) {
    const accessToken = this.jwtService.sign({sub: user.id, email: user.email})
      return {
        access_token : accessToken
      }
}
    async registerUser(createUserDto: CreateUserDto) {
      const newUser = await this.usersService.create(createUserDto)
      return this.sign(newUser)
    }
}

