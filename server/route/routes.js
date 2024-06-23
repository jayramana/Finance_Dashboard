import { Router } from "express";
const router = Router();
import KPI from "../model/Model.js";

router.get("/", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch {
    res.status(404).json("Error !");
  }
});

export default router
