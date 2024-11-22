import { Request, Response } from 'express';
import { productService } from './products.service';
import createGenericErrRes from '../../errors/createErrorRes';

// Create a Stationery Product
const createAProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productService.createAProduct(product);
    res.json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.send(createGenericErrRes(err));
  }
};

// Get All Stationery Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProducts();
    res.json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.send(createGenericErrRes(err));
  }
};

export const productController = {
  createAProduct,
  getAllProducts
};
