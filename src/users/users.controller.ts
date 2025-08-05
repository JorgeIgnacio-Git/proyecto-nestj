import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get('/users')
    getUsers() {
        return this.usersService.getUsers();
    }


    @Post('/users')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);

    }
}
