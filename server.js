const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Aung Business Academy AI Server is running."
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        academy: "Aung Business Academy",
        ai: "Gemini",
        status: "online"
    });
});

app.post("/api/ai", async (req, res) => {

    try {

        const message = String(req.body.message || "").trim();

        if (!message) {
            return res.status(400).json({
                success: false,
                error: "Message is required."
            });
        }

        // Gemini connection will be added in the next step.

        res.json({
            success: true,
            reply: "Aung Business Academy AI Coach is ready. Gemini connection will be activated in the next step."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            error: "AI server error."
        });

    }

});

app.listen(PORT, () => {

    console.log("=================================");
    console.log("AUNG BUSINESS ACADEMY");
    console.log("AI SERVER RUNNING");
    console.log("PORT:", PORT);
    console.log("=================================");

});
