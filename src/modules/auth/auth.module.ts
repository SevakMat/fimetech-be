import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '@modules/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { GoogleMapModule } from '../googleMap/googleMap.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'strong-secret',
      signOptions: { expiresIn: '600s' },
    }),
    UsersModule,
    GoogleMapModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule { }