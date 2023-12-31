// https://platform.openai.com/docs/libraries/node-js-library
// $ npm install openai dotenv
import { OpenAI } from "openai";
import 'dotenv/config';

const openai_key = process.env.OPENAI_API_KEY;
console.log(openai_key)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function getLocation() {
  const response = await fetch("https://ipapi.co/json/");
  const locationData = await response.json();
  return locationData;
}

async function getCurrentWeather(latitude, longitude) {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature");
  const weatherData = await response.json();
  return weatherData;
}

// Describe functions for OpenAI using it's schema
const functionDefinitions = [
  {
    name: "getCurrentWeather",
    description: "Get the current weather in a given location",
    parameters: {
      type: "object",
      properties: {
        longitude: { type: "string", },
        latitude: { type: "string", },
      },
      required: ["longitude", "latitude"],
    },
  },
  {
    name: "getLocation",
    description: "Get the user's location based on their IP address",
    parameters: {
      type: "object",
      properties: {},
    },
  },
];

const availableFunctions = {
  getCurrentWeather,
  getLocation,
};

// GCP: Each message in the array is an object with a role and content. The role can be "system", "user", or "assistant", indicating who is sending the message. The content is the actual text of the message.
// `messages` tracks between app and OpenAI.
// `role` must be set to "system"
const messages = [
  {
    role: "system",
    content: "You are a helpful assistant. Only use the functions you have been provided with.",
  },
];

async function agent(userInput) {
  messages.push({ role: "user", content: userInput, });
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: messages,
    functions: functionDefinitions,
  });
  console.log(response);

  const { finish_reason, message } = response.choices[0];
  if (finish_reason === "function_call") {
    const functionName = message.function_call.name;
    const functionToCall = availableFunctions[functionName];
    const functionArgs = JSON.parse(message.function_call.arguments);
    const functionArgsArr = Object.values(functionArgs);
    const functionResponse = await functionToCall.apply(null, functionArgsArr);
    console.log(functionResponse);
  }
};

agent("Where am I located right now?");