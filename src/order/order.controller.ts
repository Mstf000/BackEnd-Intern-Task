// src/order/order.controller.ts
import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post()
    async createOrder(@Body() data: { userId: number; productIds: number[]; status: string }) {
        return this.orderService.createOrder(data);
    }

    @Get(':id')
    async getOrder(@Param('id') id: string) {
        return this.orderService.getOrder(Number(id));
    }

    @Put(':id/status')
    async updateOrderStatus(@Param('id') id: string, @Body() status: string) {
        return this.orderService.updateOrderStatus(Number(id), status);
    }
}
