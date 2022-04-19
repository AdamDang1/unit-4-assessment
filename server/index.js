const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;


const {
  createNewCompliment,
  createNewMotivation,
  getCompliment,
  getFortune,
  getMotivation,
  deleteMotivation,
} = require("./controllers/controller");

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.post("/api/compliment", createNewCompliment);
app.post("/api/motivation", createNewMotivation);
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/motivation", getMotivation);
app.delete("/api/motivation/:id", deleteMotivation);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
