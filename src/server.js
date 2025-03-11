import path from 'path';
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Routes
import problemRoutes from "./routes/problemRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import notificationRoutes from './routes/notificationRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/notes", noteRoutes);
app.use('/api/notifications', notificationRoutes);

// Serve static assets from the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route: for any request that doesn't match an API route,
// send back React's index.html file so that React Router can handle it.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const startServer = async () => {
  await connectDB(); 
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
};

startServer();
