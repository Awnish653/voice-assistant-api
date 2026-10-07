const express = require("express");
const axios = require("axios");
const app = express();

// API endpoint: /ask?q=hello
app.get("/ask", async (req, res) => {
  const q = req.query.q || "empty";

  try {
    // Call your external API (example: galiai-chi)
    const response = await axios.get("https://galiai-chi.vercel.app/ask", {
      params: { q }
    });

    // Return JSON response for voice assistant
    res.json({
      query: q,
      answer: response.data || "No response from API"
    });
  } catch (error) {
    res.json({
      query: q,
      error: error.message
    });
  }
});

// Export for Vercel
module.exports = app;
