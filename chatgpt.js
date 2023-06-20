// Install axios if you haven't already:
// npm install axios

const axios = require('axios');

// Define your API key and endpoint
const apiKey = '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';
const endpoint = 'https://api.openai.com/v1/chat/completions';

// Define a function to send a chat message
async function sendMessage(message) {
  try {
    const response = await axios.post(endpoint, {
      "model": "gpt-3.5-turbo",
      "messages": [
      {
        "role": "user",
        "content": "What is OpenAPI?"
      }
  ]});

    // Process the response
    const reply = response.data.choices[0].message.content;
    console.log('Assistant:', reply);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage example
sendMessage('Hello, how can I help you?');
