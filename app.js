const express = require("express");
const path = require("path")

const PORT = 8080

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Application started and Listening on port ${PORT}`);
});
