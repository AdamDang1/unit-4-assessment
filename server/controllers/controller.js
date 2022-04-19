const compliments = ["Gee, you're a smart cookie!",
                 "Cool shirt!",
                 "Your Javascript skills are stellar.",
];

const fortunes = ["Put your mind into planning today. Look into the future.", 
"The change you started already have far-reaching effects. Be ready.", 
"The truly generous share, even with the undeserving.", 
"All your hard work will soon pay off.", 
"Congratulations! You are on your way.",
];

const motivations = ["The road to success and the road to failure are almost exactly the same.",
"Success usually comes to those who are too busy looking for it.",
"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
"I never dreamed about success. I worked for it.",
"Setting goals is the first step in turning the invisible into the visible.",
];

const createNewCompliment = (req, res) => {
    let newCompliment = req.body
    compliments.push(newCompliment);
    res.status(201).send(newCompliment);
};

const createNewMotivation = (req, res) => {
    let newMotivation = req.body
    motivations.push(newMotivation);
    res.status(201).send(newMotivation);
}

const getCompliment = (req, res) => {

     // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
};

const getFortune = (req, res) => {

    let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomFortuneIndex];

    res.status(200).send(randomFortune);
};

const getMotivation = (req, res) => {
    let randomMotivationIndex = Math.floor(Math.random() * motivations.length);
    let randomMotivation = motivations[randomMotivationIndex];

    res.status(200).send(randomMotivation);
};

const deleteMotivation = (req, res) => {
    let existingMotivation = req.params.motivations
    for(let i = 0; i < motivations.length; i++) {
        if(motivations[i] === existingMotivation) {
            motivations.splice(i, 1)
            res.status(200).send("Quote Deleted.")
            return
        }
    }
    res.status(400).send("Quote does not exist.")
};

module.exports = {
    createNewCompliment,
    createNewMotivation,
    getCompliment,
    getFortune,
    getMotivation,
    deleteMotivation,
};