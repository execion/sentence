import { Body, Controller, Post } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import NewUserDto from './dto/new-user.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(
        private readonly loginService: LoginService
    ) {}
    @Post("access")
    enterLogin(@Body() user: LoginDto) {
        console.log(user);
        return this.loginService.enterLogin(user);
    }

    @Post("register")
    createUser(@Body() newUser: NewUserDto) {
        return this.loginService.createUser(newUser);
    }
}
