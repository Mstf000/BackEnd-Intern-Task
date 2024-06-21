import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('cart')
@Controller('api/cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @Post('add')
    @ApiOperation({ summary: 'Add to cart' })
    @ApiResponse({ status: 201, description: 'The product has been successfully added to the cart.' })
    async addToCart(@Body() data: { userId: number; productId: number; quantity: number }) {
        return this.cartService.addToCart(data);
    }

    @Get(':userId')
    @ApiOperation({ summary: 'View cart' })
    @ApiResponse({ status: 200, description: 'The user cart has been successfully retrieved.' })
    async getCart(@Param('userId') userId: string) {
        return this.cartService.getCart(Number(userId));
    }

    @Put('update')
    @ApiOperation({ summary: 'Update cart' })
    @ApiResponse({ status: 200, description: 'The cart has been successfully updated.' })
    async updateCart(@Body() data: { userId: number; productId: number; quantity: number }) {
        return this.cartService.updateCart(data);
    }

    @Delete('remove')
    @ApiOperation({ summary: 'Remove from cart' })
    @ApiResponse({ status: 200, description: 'The product has been successfully removed from the cart.' })
    async removeFromCart(@Body() data: { userId: number; productId: number }) {
        return this.cartService.removeFromCart(data);
    }
}
