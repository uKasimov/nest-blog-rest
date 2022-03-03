import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {
  }

  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({ data: createUserDto });
  }

  findAll(query: Prisma.UserInclude) {
    return this.prismaService.user.findMany( {include: query});
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }
  findOneByEmail(email: string) {
    return this.prismaService.user.findUnique({where: {email: email}})
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      data: updateUserDto,
      where: { id },
    });
  }

  remove(id: string) {
    this.prismaService.user.delete({ where: { id } });
  }
}
