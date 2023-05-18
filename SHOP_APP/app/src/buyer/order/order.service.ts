import { OrderModel } from "@shopapp1/common";
import { CreateOrderDto } from "../dtos/order.dto";
import { Order } from './order.model';

export class OrderService {
    constructor(
        public orderModel: OrderModel,
    ) {}

    async createOrder(createOrderDto: CreateOrderDto) {
        const order = new this.orderModel({
            user: createOrderDto.userId,
            totalAmount: createOrderDto.totalAmount,
            chargeId: createOrderDto.chargeId
        })

        return await order.save()
    }
}

export const orderService = new OrderService(Order)


