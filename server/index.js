const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Put your mind into planning today. Look into the future.", 
                    "The change you started already have far-reaching effects. Be ready.", 
                    "The truly generous share, even with the undeserving.", 
                    "All your hard work will soon pay off.", 
                    "Congratulations! You are on your way.",
  ];

  let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomFortuneIndex];

  res.status(200).send(randomFortune);
});

const {
  createCompliment
} = require("./controller");

app.post("/api/compliment", createCompliment); 

app.listen(4000, () => console.log("Server running on 4000"));
