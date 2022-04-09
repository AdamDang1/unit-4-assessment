module.exports = {
    createCompliment: (req, res) => {
        let newCompliment = req.body
        compliments.push(newCompliment);
        res.status(200).send("New compliment received!");
    }
};