import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { SignUpDTO } from './dto/sign-up.dto';

@Injectable()
export class AuthService {

    public signIn(loginDTO: LoginDTO): Promise<any> {
        return loginDTO as any
    }

    public signUp(signUpDTO: SignUpDTO): Promise<any> {
        return signUpDTO as any
    }
}
