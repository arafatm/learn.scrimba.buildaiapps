import { OpenAI } from "openai";
import 'dotenv/config';

const openai_key = process.env.OPENAI_API_KEY;
console.log(openai_key)
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say something sweet about my girlfriend Gabby' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);
}

main();