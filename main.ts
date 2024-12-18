// main.ts
import express, { Application } from 'express';
import userRouter from './httpServer/routers/UserRouter';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
