import { BadRequestError, AuthenticationService } from '@shopapp1/common';
import { NextFunction } from 'express';
import { AuthDto } from './dtos/auth.dto';
import { UserService, userService } from './user/user.service';

export class AuthService {
    constructor(
        public userService: UserService,
        public authenticationService: AuthenticationService
    ) {}

    async signUp(createUserDto: AuthDto ) {
        const existingUser = await this.userService.findOneByEmail(createUserDto.email)
        if(existingUser) return { message: "email is taken"  }

        const newUser = await this.userService.create(createUserDto);
        
        const jwt = this.authenticationService.generateJwt({ email: createUserDto.email, userId: newUser.id }, process.env.JWT_KEY!);
        
        return {jwt};
    }

    async signIn(signinDto: AuthDto) { // Something is not working in this function
        const user = await this.userService.findOneByEmail(signinDto.email);
        if(!user) return { message: "wrong credentials" }

        const samePwd = this.authenticationService.pwdCompare(user.password, signinDto.password);

        if(!samePwd) return { message: "wrong credentials" }

        const jwt = this.authenticationService.generateJwt({ email: user.email, userId: user.id }, process.env.JWT_KEY!);        
        
        return {jwt}
    }
}

export const authService = new AuthService(userService, new AuthenticationService())