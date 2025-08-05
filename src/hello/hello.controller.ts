import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

//Forma para hacerlo con express
@Controller('')
export class HelloController {

    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);
        response.status(200).json({
            message: 'Hello, World!',
        });
    };

    @Get('new')
    @HttpCode(201)
    somethingNew() {
        return {
            message: 'This is something new!',
            statusCode: 201,
        };
    }

    @Get('notfound')
    @HttpCode(404)
    notfoundPage() {
        return {
            message: 'Page not found',
            statusCode: 404,
        };
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return {
            message: 'Internal server error',
            statusCode: 500,
        };
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return {
            message: `Your ticket number is ${num + 1}`,
            statusCode: 200,
        };

    }


    @Get('active/:status')
    @UseGuards(AuthGuard)
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status)
        return {
            message: `User is ${status}`,
            statusCode: 200,
        };
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        console.log(typeof query.name, typeof query.age);
        return {
            message: `Hello, ${query.name || 'Guest'}!`,
            statusCode: 200,
        };
    }


}
