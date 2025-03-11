import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Routes
import problemRoutes from "./routes/problemRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import notificationRoutes from './routes/notificationRoutes.js'
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/notes", noteRoutes);
app.use('/api/notifications', notificationRoutes);


const startServer = async () => {
  await connectDB(); 
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
};

startServer();
