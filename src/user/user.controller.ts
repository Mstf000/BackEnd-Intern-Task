import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('users')
@Controller('api/users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    @ApiOperation({ summary: 'Create user' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                address: { type: 'string' },
            },
        },
    })
    @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
    async createUser(@Body() data: { name: string; email: string; password: string; address?: string }) {
        return this.userService.createUser(data);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get user by ID' })
    @ApiParam({ name: 'id', type: 'string' })
    @ApiResponse({ status: 200, description: 'The user details have been successfully retrieved.' })
    async getUser(@Param('id') id: string) {
        return this.userService.getUser(Number(id));
    }
}
