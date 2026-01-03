import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoDBConnect from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import adminRouter from "./routes/adminRoute.js";
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();
const app = express();

mongoDBConnect();
connectCloudinary();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["https://ecommerce-full-stack-project-fro.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.options("*", cors());

app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Working");
});

/* Why app.listen() Must Be Removed When Deploying to Vercel

Vercel uses a serverless architecture, not a traditional server-based model. 
In a traditional Node.js or Express application, app.listen() is used to start a permanent 
HTTP server that listens on a fixed port and runs continuously. This approach works for local 
development or VPS-based hosting environments.

However, in Vercel, backend code is executed as serverless functions. 
These functions do not run continuously and are invoked only when an HTTP request is received. 
Opening or listening on a port using app.listen() is not allowed in a serverless environment and causes 
the function to crash with a runtime error.

To deploy an Express application on Vercel, the Express app must be exported instead of 
being started manually. Vercel internally handles request routing, port management, and 
function execution. Therefore, app.listen() must be removed and the Express app should be 
exported using export default app.*/

export default app;
