require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 5000; // Backend will run on port 5000

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Initialize OpenAI (NVIDIA API)
const openai = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY, // Use the API key from .env
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

// System prompt for the AI
const systemPrompt = `You are a helpful assistant that suggests over-the-counter (OTC) medicines for common symptoms.
When given symptoms, provide a list of 2-3 common OTC medicine recommendations and briefly explain what they are used for.
Format your response clearly using markdown, specifically using bullet points for each suggestion.
Example format:
- **Medicine Name 1**: Used for [brief explanation].
- **Medicine Name 2**: Used for [brief explanation].
- **Medicine Name 3**: Used for [brief explanation].

If the symptoms are severe or suggest a more serious condition, advise seeking professional medical advice in a clear, separate paragraph at the end.
Always prioritize safety and common sense. Do not provide dosage instructions, only general suggestions.`;
// API endpoint to suggest medicines
app.post('/api/suggest-medicine', async (req, res) => {
  const { symptoms } = req.body;

  if (!symptoms) {
    return res.status(400).json({ error: 'Symptoms are required.' });
  }

  try {
    console.log(`Received symptoms: "${symptoms}"`);
    const completion = await openai.chat.completions.create({
      model: "nvidia/llama-3.1-nemotron-70b-instruct",
      messages: [
        {"role": "system", "content": systemPrompt},
        {"role": "user", "content": `I have the following symptoms: ${symptoms}. What OTC medicines do you suggest?`}
      ],
      temperature: 0.5,
      top_p: 1,
      max_tokens: 1024,
      // stream: true, // We'll handle streaming on the client if needed, for now let's get a single response
    });

    // The response structure might vary slightly, we need to extract the content
    const suggestion = completion.choices[0]?.message?.content || 'No suggestions found.';
    console.log("AI Suggestion:", suggestion);
    res.json({ suggestion });

  } catch (error) {
    console.error('Error calling NVIDIA API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch medicine suggestions.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});