import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid animal",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(animal),
      max_tokens: 400,
      temperature: 1,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest a small genre of music that a Pokemon would listen to based on it's characteristics, personality, or what it is known for. Then explain why
  Pokemon: Bulbasaur
  Genre of Music and Why: Acoustic/Folk: The simplicity and organic qualities of acoustic and folk music might appeal to Bulbasaur. These genres often feature heartfelt lyrics and melodies that capture the essence of nature and evoke a sense of connection to the earth.
  Pokemon: Piplup
  Genre of Music and Why: Bubblegum Pop: Piplup's association with bubbles and its cute appearance could make it inclined towards bubblegum pop music. This genre typically features light-hearted and catchy tunes that are fun and easy to sing along to.
  Pokemon: Clawitzer
  Genre of Music and Why: Sea Shanties: Clawitzer is a Water-type Pokémon, so it might find a connection to its aquatic habitat through the melodies of sea shanties. These traditional maritime songs often evoke the spirit of sailing and the ocean, which could resonate with Clawitzer's affinity for water.
  Pokemon: ${capitalizedAnimal}
  Genre of Music and Why:`;
}
