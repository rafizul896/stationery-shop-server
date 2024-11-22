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
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.send(createGenericErrRes(err));
  }
};

// Get a Specific Stationery Product
const getAProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getAProduct(productId);
    res.json({
      message: 'Product retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.send(createGenericErrRes(err));
  }
};

// Get a Specific Stationery Product
const updateAProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const data = req.body;

    const result = await productService.updateAProduct(productId, data);
    res.json({
      message: 'Product updated successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.send(createGenericErrRes(err));
  }
};

// Delete a Stationery Product
const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deleteAProduct(productId);
    
    res.json({
      message: 'Product deleted successfully',
      success: true,
      data: {},
    });
  } catch (err: any) {
    res.send(createGenericErrRes(err));
  }
};

export const productController = {
  createAProduct,
  getAllProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
};
