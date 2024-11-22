import { Router } from 'express';
import { productController } from './products.controller';

const productRouter = Router();

productRouter.post('/createAProduct', productController.createAProduct);

export default productRouter;
