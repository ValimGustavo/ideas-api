import { Controller, Post, Body, Get, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO, UserRO } from './user.dto';


@Controller()
export class UserController {
    constructor(private userService:UserService){}

    @Post('login')
    login(@Body() data:UserDTO):Promise<UserRO>{
        return this.userService.login(data);
    }

    @Post('register')
    async register(@Body() data:UserDTO):Promise<UserRO>{
        return await this.userService.register(data);
    }

    @Get('api/users')
    async showAll():Promise<UserRO[]>{
        return await this.userService.showAll();
    }

}
