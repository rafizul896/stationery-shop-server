import { Router } from 'express';
import { productController } from './products.controller';

const productRouter = Router();

productRouter.post('/', productController.createAProduct);
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:productId', productController.getAProduct);

export default productRouter;
