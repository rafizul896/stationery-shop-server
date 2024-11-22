import { Router } from 'express';
import { productController } from './products.controller';

const productRouter = Router();

productRouter.post('/', productController.createAProduct);
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:productId', productController.getAProduct);
productRouter.put('/:productId', productController.updateAProduct);
productRouter.delete('/:productId', productController.deleteAProduct);

export default productRouter;
