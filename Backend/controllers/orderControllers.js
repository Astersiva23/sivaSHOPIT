import catchAysncErrors from "../middlewares/catchAysncErrors.js";
import Order from  '../models/order.js';
import ErrorHandler from "../utils/errorHandler.js";


//create new order => /api/v1/orders/new

export const newOrder =catchAysncErrors(async(req,res,next)=>
{
    const{
        orderItems,
        shippingInfo,
        itemsPrice,
        taxAmount,
        shippingAmount,
        totalAmount,
        paymentMethod,
        paymentInfo,

    } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxAmount,
        shippingAmount,
        totalAmount,
        paymentMethod,
        paymentInfo,
        user:req.user._id,
    });

    res.status(200).json(
        {
            order,
        }
    );

});