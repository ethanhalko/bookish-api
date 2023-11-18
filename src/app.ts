import express from 'express';
import { setRoutes } from './routes/index';

const app = express();

app.use(express.json());

setRoutes(app);

// Start the server
app.listen(3005, () => {
    console.log(`Server is running on port ${3005}`);
});

export default app;