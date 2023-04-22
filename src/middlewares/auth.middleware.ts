import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

export interface AuthenticatedRequest extends Request {
  userId: string;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) { }
  use(req: AuthenticatedRequest, _: Response, next: NextFunction) {
    if (req.headers.has('auth-user')) {
      const authUser = req.headers['auth-user'];

      try {
        const verifiedToken = jwt.verify(
          authUser,
          this.configService.get('JWT_SECRET'),
        );

        if (
          typeof verifiedToken === 'object' &&
          verifiedToken.userId &&
          verifiedToken.userId.length > 0
        ) {
          req.userId = verifiedToken.userId;
        } else {
          throw new UnauthorizedException('Nice try hacker ! malformed token ');
        }
        next();
      } catch (error) {
        throw new UnauthorizedException(
          'Please authenticate to use this resource',
        );
      }
    }

    next();
  }
}
