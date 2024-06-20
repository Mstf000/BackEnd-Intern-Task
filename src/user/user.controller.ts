// src/user/user.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() data: { name: string; email: string; password: string; address?: string }) {
        return this.userService.createUser(data);
    }

    @Get(':id')
    async getUser(@Param('id') id: string) {
        return this.userService.getUser(Number(id));
    }
}
