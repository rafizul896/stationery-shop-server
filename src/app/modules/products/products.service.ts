import { IProduct } from './products.interface';
import Product from './products.model';

const createAProduct = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload);
  return result;
};

export const productService = {
  createAProduct,
};
