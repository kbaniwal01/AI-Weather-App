import { GoogleGenAI } from "@google/genai";

export async function generateInsights(weather) {

  if (!process.env.GEMINI_API_KEY) {

    throw new Error("GEMINI_API_KEY is missing.");

  }

  const ai = new GoogleGenAI({

    apiKey: process.env.GEMINI_API_KEY,

  });

  const prompt = `

You are an intelligent weather assistant.

Temperature: ${weather.temp}°C

Condition: ${weather.condition}

Humidity: ${weather.humidity}%

AQI: ${weather.aqi}

Generate:

1. Weather summary

2. Travel advice

3. Outdoor activity advice

Keep the response under 120 words.

`;

  const response = await ai.models.generateContent({

    model: "gemini-2.5-flash",

    contents: prompt,

  });

  return response.text;

}
