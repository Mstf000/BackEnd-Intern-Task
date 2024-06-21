import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('api/orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post()
    @ApiOperation({ summary: 'Create order' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                userId: { type: 'number' },
                productIds: {
                    type: 'array',
                    items: { type: 'number' },
                },
                status: { type: 'string' },
            },
        },
    })
    @ApiResponse({ status: 201, description: 'The order has been successfully created.' })
    async createOrder(@Body() data: { userId: number; productIds: number[]; status: string }) {
        return this.orderService.createOrder(data);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get order by ID' })
    @ApiParam({ name: 'id', type: 'string' })
    @ApiResponse({ status: 200, description: 'The order details have been successfully retrieved.' })
    async getOrder(@Param('id') id: string) {
        return this.orderService.getOrder(Number(id));
    }

    @Put(':id/status')
    @ApiOperation({ summary: 'Update order status' })
    @ApiParam({ name: 'id', type: 'string' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                status: { type: 'string' },
            },
        },
    })
    @ApiResponse({ status: 200, description: 'The order status has been successfully updated.' })
    async updateOrderStatus(@Param('id') id: string, @Body() status: string) {
        return this.orderService.updateOrderStatus(Number(id), status);
    }
}
