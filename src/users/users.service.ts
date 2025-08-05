import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }


    getUsers() {
        return this.prisma.usuario.findMany();
    }


    createUser(user: CreateUserDto) {

        return this.prisma.usuario.create({
            data: user
        });

    }
}
