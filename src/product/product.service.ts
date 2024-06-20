// src/product/product.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) { }

    async createProduct(data: { name: string; description?: string; price: number; stock: number }) {
        return this.prisma.product.create({
            data,
        });
    }

    async getProduct(productId: number) {
        return this.prisma.product.findUnique({
            where: { productId },
        });
    }
}
