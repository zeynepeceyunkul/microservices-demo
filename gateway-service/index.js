const express = require("express");
const axios = require("axios");

const app = express();

// USER SERVICE proxy
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://user-service-423624249820.europe-west1.run.app/users",
      { timeout: 5000 }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "User service unavailable" });
  }
});

// ORDER SERVICE proxy
app.get("/orders", async (req, res) => {
  try {
    const response = await axios.get(
      "https://order-service-423624249820.europe-west1.run.app/orders",
      { timeout: 5000 }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Order service unavailable" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("API Gateway running");
});
