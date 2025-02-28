import express from "express";
import cors from "cors"; // ✅ Import cors middleware
import userRoutes from "./Routes/userRoutes";
import cropRoutes from "./Routes/cropRoutes";
import equipmentRoutes from "./Routes/equipmentRoutes";
import fieldRoutes from "./Routes/FieldRoutes";
import monitoringRoutes from "./Routes/monitoringRoutes";
import vehicleRoutes from "./Routes/vehicleRoutes";

const app = express();
app.use(express.json());

// ✅ Enable CORS for all origins (Allow frontend requests)
app.use(cors());

// If you want to allow only specific frontend URLs:
app.use(
    cors({
      origin: "http://localhost:5173", // Change this to your frontend URL
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// ✅ Define API routes
app.use("/users", userRoutes);
app.use("/crops", cropRoutes);
app.use("/equipment", equipmentRoutes);
app.use("/fields", fieldRoutes);
app.use("/monitoring", monitoringRoutes);
app.use("/vehicle", vehicleRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
