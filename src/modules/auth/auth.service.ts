import { Injectable } from '@nestjs/common';
import { User } from 'src/decorators/users/schemas/user.schema';
import { UsersService } from 'src/decorators/users/users.service';
import { RefreshTokenDTO } from './dto/login-by-refresh-token';
import { LoginDTO } from './dto/login.dto';
import { SignUpDTO } from './dto/sign-up.dto';

@Injectable()
export class AuthService {

    constructor(private readonly _userService: UsersService) { }

    public signIn(loginDTO: LoginDTO): Promise<any> {
        return {
            accessToken: "wqfwfuenylif8uhnfihmqwepoifdjem9fiu-0e",
            refreshToken: "wqfwfuenylif8uhnfihmqwepoifdjem9fiu-0e",
            user: {
                id: "id",
                avatarUrl: "string",
                email: "test@gmail.com",
                firstName: "Vito",
                lastName: "Scalleto",
                roles: "uder"
            }
        } as any
    }

    public signOut(): Promise<any> {
        return { success: "success" } as any
    }


    public SignInByRefreshTokenDTO(refreshTokenDTO: RefreshTokenDTO): Promise<any> {
        return {
            accessToken: "wqfwfuenylif8uhnfihmqwepoifdjem9fiu-0e",
            refreshToken: "wqfwfuenylif8uhnfihmqwepoifdjem9fiu-0e",
            user: {
                id: "id",
                avatarUrl: "string",
                email: "test@gmail.com",
                firstName: "Vito",
                lastName: "Scalleto",
                roles: "uder"
            }
        } as any
    }





    public signUp(signUpDTO: SignUpDTO): Promise<User> {
        console.log("done");

        return this._userService.createUser(signUpDTO);
    }
}
