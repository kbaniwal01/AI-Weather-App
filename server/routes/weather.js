import express from "express";

import { getWeather } from "../services/weatherService.js";

const router = express.Router();

router.get("/:city", async (req, res) => {

  try {

    const weather = await getWeather(req.params.city);

    res.json(weather);

  } catch (error) {

    console.error("❌ Weather Error:");

    console.error(error.response?.data || error.message);

    res.status(500).json({

      error: error.response?.data || error.message,

    });

  }

});

export default router;