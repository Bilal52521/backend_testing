import express from "express";

const port = 4000;
const app = express();

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.send("Testing API working...");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
