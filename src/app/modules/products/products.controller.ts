import { Request, Response } from 'express';
import { productService } from './products.service';
import createGenericErrRes from '../../errors/createErrorRes';

// Create a Stationery Product
const createAProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await productService.createAProduct(data);

    res.json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.send(createGenericErrRes(err));
    }
  }
};

// Get All Stationery Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    let query = {};

    if (searchTerm) {
      query = {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      };
    }

    const result = await productService.getAllProducts(query);

    if (result.length === 0) {
      res.json({
        message: 'No Products Found',
        status: 404,
      });
    } else {
      res.json({
        message: 'Products retrieved successfully',
        status: true,
        data: result,
      });
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.send(createGenericErrRes(err));
    }
  }
};

// Get a Specific Stationery Product
const getAProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getAProduct(productId);
    res.json({
      message: 'Product retrieved successfully',
      status: true,
      data: result,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.send(createGenericErrRes(err));
    }
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
      status: true,
      data: result,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.send(createGenericErrRes(err));
    }
  }
};

// Delete a Stationery Product
const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deleteAProduct(productId);

    res.json({
      message: 'Product deleted successfully',
      status: true,
      data: {},
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.send(createGenericErrRes(err));
    }
  }
};

export const productController = {
  createAProduct,
  getAllProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
};
