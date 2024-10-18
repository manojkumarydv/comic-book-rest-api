import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import comicRoutes from './routes/comicRoute.js';
import { errorHandler } from './utils/errorHandler.js';

dotenv.config();

connectDB();

const app = express();


app.use(express.json());

// API Routes
app.use('/api/comics', comicRoutes);

// Error Handler Middleware (must be used after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
