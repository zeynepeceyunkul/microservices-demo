const express = require("express");
const axios = require("axios");
const app = express();

app.get("/orders", async (req, res) => {
  try {
    const response = await axios.get(
      "https://user-service-423624249820.europe-west1.run.app/users"
    );

    res.json({
      orderId: 1,
      product: "Kitap",
      user: response.data[0]
    });
  } catch (error) {
    res.status(500).json({ error: "User service not reachable" });
  }
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Order service running");
});
