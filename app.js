require("dotenv").config();

const express = require("express");
const path = require("path");
const index = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "dist")));

app.use("/api/", index);

app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started: http://localhost:${PORT}`));
