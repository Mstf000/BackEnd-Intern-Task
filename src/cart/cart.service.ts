import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CartService {
    constructor(private prisma: PrismaService) { }

    async addToCart(data: { userId: number; productId: number; quantity: number }) {
        return this.prisma.cart.upsert({
            where: {
                userId_productId: {
                    userId: data.userId,
                    productId: data.productId,
                },
            } as Prisma.CartWhereUniqueInput,
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
        return this.prisma.cart.update({
            where: {
                userId_productId: {
                    userId: data.userId,
                    productId: data.productId,
                },
            } as Prisma.CartWhereUniqueInput,
            data: { quantity: data.quantity },
        });
    }

    async removeFromCart(data: { userId: number; productId: number }) {
        return this.prisma.cart.delete({
            where: {
                userId_productId: {
                    userId: data.userId,
                    productId: data.productId,
                },
            } as Prisma.CartWhereUniqueInput,
        });
    }
}
