const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ayşe" },
    { id: 2, name: "Ali" }
  ]);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("User service running");
});
