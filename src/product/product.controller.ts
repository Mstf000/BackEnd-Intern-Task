import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('products')
@Controller('api/products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    @ApiOperation({ summary: 'Create product' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                price: { type: 'number' },
                stock: { type: 'number' },
            },
        },
    })
    @ApiResponse({ status: 201, description: 'The product has been successfully created.' })
    async createProduct(@Body() data: { name: string; description?: string; price: number; stock: number }) {
        return this.productService.createProduct(data);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get product by ID' })
    @ApiParam({ name: 'id', type: 'string' })
    @ApiResponse({ status: 200, description: 'The product details have been successfully retrieved.' })
    async getProduct(@Param('id') id: string) {
        return this.productService.getProduct(Number(id));
    }
}
