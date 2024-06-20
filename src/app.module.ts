// src/app.module.ts
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [UserModule, ProductModule, OrderModule, CartModule, PrismaModule],
})
export class AppModule { }
