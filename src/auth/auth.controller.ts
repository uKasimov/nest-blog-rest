import { Body, Controller, Get, Post, UseGuards, Request, } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { JwtGuard } from "./guards/jwt-auth.guard";
import { Me } from "./guards/me.guard";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req) {
    return this.authService.sign(req.user)
  }
  @Get('profile')
  @UseGuards(JwtGuard)
  profile(@Me() me) {
    return me
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }
}
