import express, { Request, Response } from 'express';
import cors from 'cors';
import productRouter from './app/modules/products/products.route';
import orderRouter from './app/modules/order/order.route';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter); // for products
app.use('/api/orders', orderRouter); // for orders

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Stationery Shop Server is Running 👻',
  });
});

export default app;
