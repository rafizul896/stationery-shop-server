import express, { Request, Response } from 'express';
import cors from 'cors';
import productRouter from './app/modules/products/products.route';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Stationery Shop Server is Running 👻',
  });
});

export default app;
