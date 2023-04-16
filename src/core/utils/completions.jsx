import axios from "axios";

//Sends a prompt to GPT, using completions.
// ! gpt-3.5-turbo is not currently available with completions, making this deprecated.
export const FetchData = async (props) => {
  const apiKey = process.env.REACT_APP_OPEN_AI_API_KEY;

  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: `${props}`,
      model: "gpt-3.5-turbo",
      max_tokens: 4000,
      n: 1,
      //stop: ".",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response.data.choices[0].text;
};

// * Sends a prompt to GPT, using gpt-3.5-turbo.
export const FetchDataChat = async (props) => {
  const apiKey = process.env.REACT_APP_OPEN_AI_API_KEY;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: props }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response;
};
