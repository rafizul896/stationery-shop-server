import { ObjectId } from 'mongoose';

interface IOrder {
  email: string;
  product: ObjectId;
  quantity: number;
  totalPrice: number;
}

export default IOrder;