const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/* ==========================================
   GEMINI
========================================== */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

let ai = null;

if (GEMINI_API_KEY) {
    ai = new GoogleGenAI({
        apiKey: GEMINI_API_KEY
    });
}

/* ==========================================
   HOME
========================================== */

app.get("/", (req, res) => {

    res.json({
        success: true,
        academy: "Aung Business Academy",
        message: "AI Business Coach Server is running."
    });

});

/* ==========================================
   HEALTH CHECK
========================================== */

app.get("/api/health", (req, res) => {

    res.json({
        success: true,
        academy: "Aung Business Academy",
        server: "online",
        gemini: ai ? "configured" : "not configured"
    });

});

/* ==========================================
   AI BUSINESS COACH
========================================== */

app.post("/api/ai", async (req, res) => {

    try {

        if (!ai) {

            return res.status(500).json({
                success: false,
                error: "Gemini API key is not configured."
            });

        }

        const message = String(
            req.body?.message || ""
        ).trim();

        if (!message) {

            return res.status(400).json({
                success: false,
                error: "Please enter a message."
            });

        }

        if (message.length > 8000) {

            return res.status(400).json({
                success: false,
                error: "Message is too long."
            });

        }

        const response = await ai.models.generateContent({

            model: "gemini-3.8-flash",

            contents: message,

            config: {

                systemInstruction: `
You are the AI Business Coach inside Aung Business Academy.

Your job is to help business owners, entrepreneurs,
sales managers and business professionals.

Main expertise:

- Business Strategy
- Sales
- Sales Management
- Marketing
- Branding
- Leadership
- Team Management
- Customer Service
- Finance
- Business Planning
- Productivity
- Business Growth

Rules:

1. Give practical advice.
2. Focus on execution.
3. Use simple language.
4. Give step-by-step action plans when useful.
5. Use Myanmar language when the user writes Myanmar.
6. Use English when the user writes English.
7. If the user mixes Myanmar and English, respond naturally.
8. Use Myanmar business examples when appropriate.
9. Think like an experienced Business Manager.
10. Help users turn ideas into measurable actions.
11. Recommend KPIs when appropriate.
12. Do not invent facts.
13. Clearly state assumptions when information is missing.

For business problems, use this structure when appropriate:

Situation
Analysis
Recommendation
Action Plan
KPI

Be practical, concise and useful.
`,

                temperature: 0.7,

                maxOutputTokens: 1200

            }

        });

        const reply = response.text || "No response received.";

        res.json({

            success: true,
            reply: reply

        });

    } catch (error) {

        console.error("Gemini Error:", error);

        res.status(500).json({

            success: false,
            error: "Gemini AI could not respond right now."

        });

    }

});

/* ==========================================
   START SERVER
========================================== */

app.listen(PORT, () => {

    console.log("");
    console.log("====================================");
    console.log("🚀 AUNG BUSINESS ACADEMY");
    console.log("====================================");
    console.log("🌐 Port:", PORT);
    console.log(
        "🤖 Gemini:",
        GEMINI_API_KEY ? "READY" : "NOT CONFIGURED"
    );
    console.log("====================================");
    console.log("");

});
