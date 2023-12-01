[Scrimba: Build AI Apps](https://scrimba.com/learn/buildaiapps/course-intro-co1ba4eccac7c70d3ba27a8e2)t

# Scrimba: Build a movie idea generator with ChatGPT and Dall-E

## MoviePitch Intro

Build a ChatGPT-4 app to generate movie ideas

## The Boilerplate

`index.js`
- event listener to detect submit `click`

## Getting an OpenAI API Key

- https://platform.openai.com/api-keys to create a new key.
- https://platform.openai.com/usage

## Getting info for fetch request

https://platform.openai.com/docs/introduction/overview

`completion` := "response"

`index.js`
```js
const apiKey = "<API_KEY>"
const url = "https://api.openai.com/v1/completions"
```

## Building an OpenAI fetch request
## The first AI fetch request
## Models
## Tools
## Refactor to use dependency I - env variable
## Refactor to use dependency II - The dependency
## Refactor to use dependency III - update fetchReply
## Take out of Scrimba
## Personalising the message
## Tokens
## fetchSynopsis
## Aside: few shot approach
## Aside: few shot approach II
## Refactor fetchSynopsis
## Architecture
## Title and Temperature
## Reaching for the stars
## Aside: createImage
## fetchImagePrompt
## Displaying the image and finishing off the UX
## Outro

# Build a GPT-4 Chatbot
## KnowItAll Intro
## Starter code
## Aside: How ChatGPT models work for chatbots
## Conversation and instructions
## Add user input to conversation array
## The createChatCompletion endpoint
## The model and object
## Render the output, update the array
## Aside: Theory: Frequency and presence penalties
## presence_penalty practice
## frequency_penalty practice
## The chatbot's personality
## Firebase Intro
## Firebase Account and database set up
## Firebase dependency and set up
## Push method and instructions object
## Update fetchReply
## Update fetchReply 2
## Update the database
## Render the conversation from the DB
## The "start over" button
## Outro

# Build a chatbot with a fine-tuned model
## Intro to fine-tuning
## Convert the Chatbot to We-Wingit
## An Overview of the AI
## Data for fine-tuning
## The data we're using
## CLI 1: Setting up the environment
## CLI 2: Data Preparation Tool
## CLI 3: Tuning the model
## Updating the JS 1
## Updating the JS 2
## Updating the JS 3
## The Separator
## Aside: Stop Sequence
## Adding the stop sequence
## n_epochs
## Intro to deployment
## Download and GitHub
## Netlify sign-up
## Add Netlify env var
## Netlify CLI
## Netlify serverless function 1
## Update fetchReply
## Serverless function 2
## Serverless function 3
## Serverless function 4
## Solo Project (PRO) - PollyGlot
## Outro
