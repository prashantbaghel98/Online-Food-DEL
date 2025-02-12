import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoutes.js';
import 'dotenv/config.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// db connection 
connectDB();

// api endpoints
app.use("/image", express.static("uploads"));
app.use("/api/food/", foodRouter);
app.use("/api/user/", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter); 

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});   