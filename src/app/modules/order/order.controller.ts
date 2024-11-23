import { Request, Response } from 'express';
import { orderService } from './order.service';
import createGenericErrRes from '../../errors/createErrorRes';

// Order a Stationery Product
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.createOrder(order);

    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (err: any) {
    res.send(createGenericErrRes(err));
  }
};

// Calculate Revenue from Orders (Aggregation)
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.calculateRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: result,
    });
  } catch (err: any) {
    res.send(createGenericErrRes(err));
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
