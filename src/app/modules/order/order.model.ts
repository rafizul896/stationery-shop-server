import  { model, models, Schema, Types } from 'mongoose';
import IOrder from './order.interface';
import Product from '../products/products.model';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/\S+@\S+\.\S+/, 'Please provide a valid email'],
    },
    product: {
      type: Types.ObjectId,
      ref: Product,
      required: [true, 'Product is required'],
      validate: {
        validator: async (id: Types.ObjectId) => {
          const productExists = await models.Product.exists({
            _id: id,
          });
          return productExists;
        },
        message: 'Product does not exist',
      },
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
      validate: {
        validator: (value: number) => Number.isInteger(value),
        message: 'Quantity must be an integer',
      },
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be a positive number'],
    },
  },
  {
    timestamps: true,
    versionKey: false
  },
);

// Create the Order model
const Order = model<IOrder>('Order', orderSchema);

export default Order;
