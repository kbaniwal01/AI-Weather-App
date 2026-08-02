
import express from "express";

import { generateInsights } from "../services/geminiService.js";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const insights = await generateInsights(req.body);

    res.json({

      insights,

    });

  } catch (error) {

    res.status(500).json({

      error: "AI generation failed",

    });

  }

});

export default router;