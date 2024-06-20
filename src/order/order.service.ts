// src/order/order.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService) { }

    async createOrder(data: { userId: number; productIds: number[]; status: string }) {
        return this.prisma.order.create({
            data: {
                userId: data.userId,
                status: data.status,
                products: {
                    connect: data.productIds.map((id) => ({ productId: id })),
                },
            },
        });
    }

    async getOrder(orderId: number) {
        return this.prisma.order.findUnique({
            where: { orderId },
            include: { products: true },
        });
    }

    async updateOrderStatus(orderId: number, status: string) {
        return this.prisma.order.update({
            where: { orderId },
            data: { status },
        });
    }
}
