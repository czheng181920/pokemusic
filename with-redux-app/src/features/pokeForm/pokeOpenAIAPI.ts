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
    // Consider implementing your own error handling logic here
    console.error('Failed PokeForm submit: ', error);
    alert(error.message);
    return error;
  }
}

// try {
//   setLoading(true);
//   const response = await fetch("/api/generate", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ pokemon: pokemonInput }),
//   });


//   setResult(data.result);
//   setLoading(false)
//   setPokemonInput("");
// } catch(error: any) {
//   // Consider implementing your own error handling logic here
//   setLoading(false)
//   console.error(error);
//   alert(error.message);
// }