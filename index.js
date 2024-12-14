import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import animalRoutes from "./src/routes/animalRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Use CORS middleware
app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true, // If using cookies
}));

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/animals", animalRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || "Server Error" });
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Animal World</h1>");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
