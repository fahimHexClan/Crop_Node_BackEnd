import express from "express";
import userRoutes from "./Routes/userRoutes";
import cropRoutes from "./Routes/cropRoutes";  // Ensure correct path
import equipmentRoutes from "./Routes/equipmentRoutes";  // Include Equipment Routes
import fieldRoutes from "./Routes/FieldRoutes";
import monitoringRoutes from "./Routes/monitoringRoutes";


const app = express();
app.use(express.json());

// Use user routes
app.use("/users", userRoutes);
app.use("/crops", cropRoutes);
app.use("/equipment", equipmentRoutes);
app.use("/fields", fieldRoutes);
app.use("/monitoring", monitoringRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
