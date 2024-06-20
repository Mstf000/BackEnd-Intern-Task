// src/cart/cart.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs.common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @Post('add')
    async addToCart(@Body() data: { userId: number; productId: number; quantity: number }) {
        return this.cartService.addToCart(data);
    }

    @Get(':userId')
    async getCart(@Param('userId') userId: string) {
        return this.cartService.getCart(Number(userId));
    }

    @Put('update')
    async updateCart(@Body() data: { userId: number; productId: number; quantity: number }) {
        return this.cartService.updateCart(data);
    }

    @Delete('remove')
    async removeFromCart(@Body() data: { userId: number; productId: number }) {
        return this.cartService.removeFromCart(data);
    }
}
