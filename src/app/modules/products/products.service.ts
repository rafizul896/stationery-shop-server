import { IProduct } from './products.interface';
import Product from './products.model';

const createAProduct = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getAProduct = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

export const productService = {
  createAProduct,
  getAllProducts,
  getAProduct,
};
