import express from "express";

const app = express();
const PORT = 3000;

app.get("", (req, resp) => {
  console.log("DEBUG - base route");
  resp.send("Welcome to LoopKaka's Channel");
});

app.get("/test", (req, resp) => {
  console.log("DEBUG - test route");
  resp.json({
    name: "Loop Kaka",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server start hogya and listing to ${PORT}`);
});