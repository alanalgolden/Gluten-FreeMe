import axios from "axios";

const FetchData = async (props, prompt) => {
  const apiKey = process.env.REACT_APP_OPEN_AI_API_KEY;

  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: `${prompt} "${props}"`,
      model: "text-davinci-003",
      max_tokens: 1000,
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

export default FetchData;
