import { OrderDoc, OrderModel } from "@shopapp1/common";
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        requied: true
    },
    totalAmount: { type: Number, required: true },
    chargeId: { type: String, required: true }

})

export const Order = mongoose.model<OrderDoc, OrderModel>('Order', schema)