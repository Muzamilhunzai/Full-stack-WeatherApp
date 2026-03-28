import express from "express";
import { getcities } from "../controllers/countrycontrol.js"; // Add .js extension

const router = express.Router();

router.get("/weather", getcities);

export default router;