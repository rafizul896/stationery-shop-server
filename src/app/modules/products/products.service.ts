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

const updateAProduct = async (productId: string, data: IProduct) => {
  const result = await Product.findByIdAndUpdate(productId, data, {
    new: true,
  });
  return result;
};

const deleteAProduct = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId, { new: true });
  return result;
};

export const productService = {
  createAProduct,
  getAllProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
};
