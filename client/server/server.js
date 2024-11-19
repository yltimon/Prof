const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai'); 
const bodyParser = require('body-parser');
require('dotenv').config();
const port = 5000;
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/api/chat", async (req, res) => {
    const userMessage = req.body.message;
    if (!userMessage) {
        return res.status(400).json({ error: "Message is required" });
      }
    
      try {
        const response = await model.generateContent(userMessage);
    
        const botResponse = response.response.candidates[0].content.parts[0].text || "I'm here to assist you!";
    
        res.status(200).json({ response: botResponse });
      } catch (error) {
        console.error("Error with Gemini API:", error);
        res.status(500).json({ error: "Failed to get a response from the Gemini model" });
    }
});
    


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


