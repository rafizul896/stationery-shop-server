import { Schema } from 'mongoose';

interface IOrder {
  email: string;
  product: Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

export default IOrder;
