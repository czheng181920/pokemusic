export default async function getPokemonSpecies(req: any, res: any) { 
    try{
      const response = await fetch('https://pokeapi.co/api/v2/generation/1/',{
        method: 'GET'
      });
      const repo = await response.json()
  
      if (response.status !== 200) {
        throw repo.error || new Error(`Request failed with status ${response.status}`);
      }
  
      res.status(200).json({ result: repo });
  
    } catch(error:any) {
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`pokemon error: ${error.message}`);
        res.status(500).json({
          error: {
            message: 'An error occurred during your pokemon request.',
          }
        });
      }
    }
  }