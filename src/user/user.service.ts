// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async createUser(data: { name: string; email: string; password: string; address?: string }) {
        return this.prisma.user.create({
            data,
        });
    }

    async getUser(userId: number) {
        return this.prisma.user.findUnique({
            where: { userId },
        });
    }
}
