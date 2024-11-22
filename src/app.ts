import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Stationery Shop Server is Running 👻',
  });
});

export default app;
