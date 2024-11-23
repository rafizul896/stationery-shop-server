import Product from '../products/products.model';
import IOrder from './order.interface';
import Order from './order.model';
const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const { email, product, quantity } = payload;

  // Check if the product exists
  const existsProduct = await Product.findById(product);
  if (!existsProduct) throw new Error('Product not found');

  // Check inventory availability
  if (!existsProduct.inStock || existsProduct.quantity < quantity) {
    throw new Error('Insufficient stock for the requested quantity');
  }

  // Calculate the total price
  const totalPrice = existsProduct.price * quantity;

  // Update inventory
  existsProduct.quantity -= quantity;
  if (existsProduct.quantity === 0) {
    existsProduct.inStock = false;
  }
  
  await existsProduct.save();

  // Create the order
  const result = await Order.create({ email, product, quantity, totalPrice });
  return result;
};

const calculateRevenue = async () => {
  const result = await Order.aggregate([
    // stage-1
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalPrice',
        },
      },
    },
    // stage-2
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  return result.length > 0 ? result[0] : { totalRevenue: 0 };
};

export const orderService = {
  createOrder,
  calculateRevenue,
};
