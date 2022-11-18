import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { SignUpDTO } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  private signIn(@Body() loginDTO: LoginDTO): Promise<any> {
    return this.authService.signIn(loginDTO);
  }
  @Post('sign-up')
  private signUp(@Body() signUpDTO: SignUpDTO): Promise<any> {
    return this.authService.signUp(signUpDTO);
  }

}
