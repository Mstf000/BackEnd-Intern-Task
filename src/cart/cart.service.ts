import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CartService {
    constructor(private prisma: PrismaService) { }

    async addToCart(data: { userId: number; productId: number; quantity: number }) {
        // Check if product exists
        const productExists = await this.prisma.product.findUnique({
            where: { productId: data.productId },
        });

        if (!productExists) {
            throw new NotFoundException(`Product with ID ${data.productId} does not exist.`);
        }

        return this.prisma.cart.upsert({
            where: {
                userId_productId: {
                    userId: data.userId,
                    productId: data.productId,
                },
            },
            update: {
                quantity: {
                    increment: data.quantity,
                },
            },
            create: {
                userId: data.userId,
                productId: data.productId,
                quantity: data.quantity,
            },
        });
    }

    async getCart(userId: number) {
        return this.prisma.cart.findMany({
            where: { userId },
            include: { product: true },
        });
    }

    async updateCart(data: { userId: number; productId: number; quantity: number }) {
        return this.prisma.cart.updateMany({
            where: {
                userId: data.userId,
                productId: data.productId,
            },
            data: {
                quantity: data.quantity,
            },
        });
    }

    async removeFromCart(data: { userId: number; productId: number }) {
        return this.prisma.cart.deleteMany({
            where: {
                userId: data.userId,
                productId: data.productId,
            },
        });
    }
}
