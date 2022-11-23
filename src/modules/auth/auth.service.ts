import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/users/schemas/user.schema';
import { UsersService } from 'src/decorators/users/users.service';
import { RefreshTokenDTO } from './dto/login-by-refresh-token';
import { LoginDTO } from './dto/login.dto';
import { SignUpDTO } from './dto/sign-up.dto';
import { compareHash, hashPassword } from '@common/utils';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) { }

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

    public signIn(user: any): any {
        return this.validateUser(user.email, user.password)
            .then((res) => {
                return {
                    access_token: this.jwtService.sign(user),
                    statusCode: 200
                }
            })
            .catch((e) => {
                throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
            })
    }

    public async signUp(signUpDTO: SignUpDTO): Promise<User> {
        return this.userService.createUser(signUpDTO);
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOneUserByEmail(email);
        if (!user) {
            throw Error
        }
        const isPasswordValid = await compareHash(password, user.salt);
        if (isPasswordValid) {
            delete user.salt
            return user;
        }
        throw Error;
    }
}
