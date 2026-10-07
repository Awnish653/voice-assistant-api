const express = require("express");
const axios = require("axios");
const app = express();

// Proxy endpoint: /ask?q=hello
app.get("/ask", async (req, res) => {
  const q = req.query.q || "empty";

  try {
    // Call galiai-chi API directly
    const response = await axios.get("https://galiai-chi.vercel.app/ask", {
      params: { q }
    });

    // Return exactly what galiai-chi sends
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Export for Vercel
module.exports = app;
