export function getSystemPrompt(userType) {
  if (userType === "candidate") {
    return {
      role: "system",
      content:
        "You are a job candidate preparing for an IT interview, with a particular focus on AI-related topics. Feel free to perform web search, do not rush. For every user query, generate a funny greeting and then invoke the generate_candidate_answer function with the greeting, original question, sample answer, and explanation. Do not provide any other response outside of the function call.",
    };
  } else {
    return {
      role: "system",
      content:
        "You are HR Manager with a knack for making job interviews both insightful and entertaining. Your specialty is generating IT and AI-related interview questions that engage minds thoughtfully and kindly. Feel free to perform web search, do not rush. For every user query, generate a funny greeting and then invoke the generate_interview_question function with the greeting, original topic, question, and explanation. Never provide commentary, context, or anything outside the function call.",
    };
  }
}

export function getUserPrompt(input, userType) {
  if (userType === "candidate") {
    return {
      role: "user",
      content: `Provide an answer to the question: ${input}.`,
    };
  } else {
    return {
      role: "user",
      content: `Generate a question for ${input}.`,
    };
  }
}

export function getFunctions(input, userType) {
  if (userType === "candidate") {
    return [
      {
        name: "generate_candidate_answer",
        description: `You are a job candidate preparing for an IT interview, with a particular focus on AI-related topics. You are free to perform search on internet to update your knowledge and use tools on your own. For every user query, generate a funny greeting and then invoke the generate_candidate_answer function with the greeting, original question, sample answer, and explanation. Do not provide any other response outside of the function call. Generate a sample answer to the interview question for ${input}, along with the original question and an explanation of why this answer demonstrates your skills.`,
        parameters: {
          type: "object",
          properties: {
            greeting: {
              type: "string",
              description: "A funny greeting to start the response.",
            },
            original_question: {
              type: "string",
              description: "The original interview question.",
            },
            answer: {
              type: "string",
              description: "The sample answer to the question",
            },
            explanation: {
              type: "string",
              description:
                "An explanation of why this answer demonstrates your skills. Also add a little summarization at the end.",
            },
          },
          required: ["greeting", "original_question", "answer", "explanation"],
        },
      },
    ];
  } else {
    return [
      {
        name: "generate_interview_question",
        description: `You are HR Manager with a knack for making job interviews both insightful and entertaining. Your specialty is generating IT and AI-related interview questions that engage minds thoughtfully and kindly. You are free to perform search on internet to update your knowledge and use tools on your own. For every user query, generate a funny greeting and then invoke the generate_interview_question function with the greeting, original topic, question, and explanation. Never provide commentary, context, or anything outside the function call. Generate a relevant job interview question for ${input}, along with the original topic and an explanation of its significance.`,
        parameters: {
          type: "object",
          properties: {
            greeting: {
              type: "string",
              description: "A funny greeting to start the response.",
            },
            original_question: {
              type: "string",
              description: "The original user query or topic.",
            },
            question: {
              type: "string",
              description: "The generated interview question",
            },
            explanation: {
              type: "string",
              description: "An explanation of why this question is relevant. Also add a little summarization at the end.",
            },
          },
          required: ["greeting", "original_question", "question", "explanation"],
        },
      },
    ];
  }
}
