// https://platform.openai.com/docs/libraries/node-js-library
// $ npm install openai
import OpenAI from "openai";
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

console.log(process.env.OPENAI_API_KEY)
