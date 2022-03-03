import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { Password } from 'passport';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from "./strategy/local.strategy";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { jwt } from "./constant";

@Module({
  imports: [PassportModule,
  JwtModule.register({
    secret: jwt.secretKey,
    signOptions: {expiresIn: '10h'}
  }),
  UsersModule],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
