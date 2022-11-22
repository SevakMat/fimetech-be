import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RefreshTokenDTO } from './dto/login-by-refresh-token';
import { LoginDTO } from './dto/login.dto';
import { SignUpDTO } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign-out')
  private signOut(): Promise<any> {
    return this.authService.signOut();
  }


  @Post('sign-in-by-refresh-token')
  private SignInByRefreshTokenout(@Body() refreshTokenDTO: RefreshTokenDTO): Promise<any> {
    return this.authService.SignInByRefreshTokenDTO(refreshTokenDTO);
  }

  //done 
  @Post('sign-up')
  private async signUp(@Body() signUpDTO: SignUpDTO): Promise<any> {
    await this.authService.signUp(signUpDTO);
    return {
      statusCode: 201,
      success: true
    }
  }

  @Post('sign-in')
  private signIn(@Body() loginDTO: LoginDTO): Promise<any> {
    return this.authService.signIn(loginDTO);
    
  }

}
