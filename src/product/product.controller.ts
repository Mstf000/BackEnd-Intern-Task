// src/product/product.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    async createProduct(@Body() data: { name: string; description?: string; price: number; stock: number }) {
        return this.productService.createProduct(data);
    }

    @Get(':id')
    async getProduct(@Param('id') id: string) {
        return this.productService.getProduct(Number(id));
    }
}
