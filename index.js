require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/api/", (req, res) => {
  res.send({
    message: "Hi!, The API Endpoint is available",
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
