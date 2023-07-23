export async function submitPokemon(pokemonInput:string): Promise<{ [key: string]: any }> {
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pokemon: pokemonInput }),
    })

    const data = await response.json()
    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }
    return data
  } catch(error: any) {
    console.error('Failed while fetching OpenAI response: ', error);
    throw error;
  }
}

export async function generateSpotifySong(genreInput:string): Promise<{ [key: string]: any }> {
  try {
    var params = {
      q: genreInput,
      type : `track`,
      limit: 2,
    }
    // q: `sea%20shanties`,
    // type : `track`,
    // limit: 2
    const response = await fetch("/api/spotifyAPI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })

    const data = await response.json()
    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }
    return data;
  } catch(error: any) {
    console.error('Failed while fetching Spotify tracklist: ', error);
    throw error;
  }
}