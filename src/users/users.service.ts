import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users: any = [
        { id: 1, username: 'john_doe', email: 'jd@gmail.com', password: 'password123' },
        { id: 2, username: 'jane_smith', email: 'js@gmail.com', password: 'password456' },
        { id: 3, username: 'alice_johnson', email: 'aj@gmail.com', password: 'password789' }
    ];

    getUsers() {
        return [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' },
            { id: 3, name: 'Alice Johnson' }
        ];
    }


    createUser(user: CreateUserDto) {

        this.users.push(user);

        return {
            user,
            id: this.users.length + 1
        };

    }
}
