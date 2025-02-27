import express from "express";
import userRoutes from "../Routes/userRoutes";  // Ensure correct path

const app = express();
app.use(express.json());

// Use user routes
app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
