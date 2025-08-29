import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import uploadRoutes from "./routes/upload.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// File uploads will be handled in routes/upload.js
app.use("/api/upload", uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
