import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 } from 'uuid';
import { ConfigService } from '@nestjs/config';
import jwt from 'jsonwebtoken';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/token')
  generateToken(): { token: string } {
    const generatedToken = jwt.sign(
      { authId: v4() },
      this.configService.getOrThrow('auth-user'),
      {
        algorithm: 'HS256',
      },
    );

    return { token: generatedToken };
  }
}
