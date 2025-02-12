const {generateContent} = require("../services/ai.service");

const getReview = async (req, res) => {
    const code = req.body.code;
    if(!code){
        res.status(400).json({error: 'Prompt is required'});
    }
    if (code) {
        const response = await generateContent(code);
        res.json({ response });
    } else {
        res.status(400).json({ error: 'Prompt is required error' });
    }
}

module.exports = { getReview };
