// file: /pages/api/openai.js

import { Configuration, OpenAIApi } from "openai";
import { getSystemPrompt, getFunctions } from "../../prompts/promptUtils";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
/**
 * Handle the API request
 * @param {object} req - The HTTP request object
 * @param {object} res - The HTTP response object
 */
export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const { userPrompt, userType } = req.body.payload || "" ;
  const userMessage = userPrompt.content || "";
  
  console.log("The userMessage is: ", userMessage);
  console.log("The userType is: ", userType);

  let topic = "";
  if (userType === "candidate") {
    topic = userMessage.replace("Provide an answer to the question: ", "");
  } else {
    topic = userMessage.replace("Generate a question for ", "");
  }

  try {
    const systemMessage = getSystemPrompt(userType);
    const functions = getFunctions(topic, userType);
    const messages = [systemMessage, { role: "user", content: topic }];

    const completion = await openai.createChatCompletion({
      model: "gpt-4.1-2025-04-14",
      messages: messages,
      functions: functions,
      temperature: 0.7,
      max_tokens: 650,
      // top_p: 1,
    });

    console.log(
      "Full OpenAI response: ",
      JSON.stringify(completion.data, null, 2)
    );
    const message = completion.data.choices[0].message;
    let result;
    if (message.function_call) {
      const parsed = JSON.parse(message.function_call.arguments);
      if (userType === "candidate") {
        result = {
          greeting: parsed.greeting || "Hello",
          original_question: parsed.original_question,
          answer: parsed.answer,
          explanation: parsed.explanation,
        };
      } else {
        result = {
          greeting: parsed.greeting || "Hello",
          original_question: parsed.original_question,
          question: parsed.question,
          explanation: parsed.explanation,
        };
      }
    } else if (message.content) {
      result = { greeting: message.content };
    } else {
      res.status(500).json({
        error: {
          message: "No content or function call returned from OpenAI.",
        },
      });
      return;
    }
    res.status(200).json({ result: JSON.stringify(result) });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
