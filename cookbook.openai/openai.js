// https://platform.openai.com/docs/libraries/node-js-library
// $ npm install openai
import { OpenAI } from "openai";
import 'dotenv/config';

const openai_key = process.env.OPENAI_API_KEY;
console.log(openai_key)
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});