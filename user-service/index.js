const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "user-service",
    message: "User Service is running"
  });
});

app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com"
    }
  ]);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

app.listen(3001, () => {
  console.log("User Service running on port 3001");
});
