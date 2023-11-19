import express from 'express';
import { setRoutes } from './routes';

const port = process.env.PORT || 3005;

const app = express();

app.use(express.json());

setRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
