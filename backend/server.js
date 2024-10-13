import express from 'express';
import authRoutes from './routes/auth.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Enable CORS
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Parse JSON requests
app.use(express.json());  

const PORT = process.env.PORT || 5000;

// Use auth routes
app.use('/api/auth/', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
