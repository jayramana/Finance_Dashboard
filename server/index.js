import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiroutes from "./route/routes.js";
import KPI from "./model/Model.js";
import { kpis } from "./data/data.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/finance", kpiroutes);

mongoose
  .connect(process.env.MONGO_CLUSTER_URL, 
  )
  .then(async () => {
    console.log('Connected to MongoDB');

    await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis)

    app.listen(process.env.PORT, () => {
      console.log(`Listening on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
