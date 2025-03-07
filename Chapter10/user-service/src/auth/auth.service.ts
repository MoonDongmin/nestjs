import * as jwt from 'jsonwebtoken';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import authConfig from 'src/config/authConfig';
import { ConfigType } from '@nestjs/configs';

interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
  ) { }

  login(user: User) {
    const payload = { ...user };

    return jwt.sign(payload, 'test', {
      expiresIn: '1d',
      audience: 'example.com',
      issuer: 'example.com',
    });
  }

  // verify(jwtString: string) {
  //   try {
  //     const payload = jwt.verify(jwtString, this.configs.jwtSecret) as (jwt.JwtPayload | string) & User;
  //
  //     const { id, email } = payload;
  //
  //     return {
  //       userId: id,
  //       email,
  //     }
  //   } catch (e) {
  //     throw new UnauthorizedException()
  //   }
  // }
}
