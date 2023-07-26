import { createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit'
import type { AppState, AppThunk } from '../../store'

import { generateSpotifySong, submitPokemon } from './pokeOpenAIAPI'


interface Track {
  title: string
  artist: string
  url: string
  play: string
  albumArt: string
}

interface SubmitOutput {
  genre: string, 
  details: string, 
  tracks: Track[]
}

export interface PokeFormState {
  pokemonInput: string
  pokedexNumber: number
  status: 'idle' | 'loading' | 'failed' | 'success'
  submitOutput: SubmitOutput
  spotifySongs: {name: string, url: string}[]
  generation: number
}

const initialState: PokeFormState = {
  pokemonInput: "",
  pokedexNumber: -1,
  status: 'idle',
  submitOutput: {
    genre: "",
    details: "",
    tracks: []
  },
  spotifySongs: [],
  generation: 1,
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const pokeSubmit = createAsyncThunk(
  'pokeForm/submitPokemon',
  async (pokemonInput: string, { rejectWithValue }) => {
    try {
      let data: string[];
      let tracklist: Track[] = []; //change this typing to tracks

      const response = await submitPokemon(pokemonInput);
      data = response.result.split(":");
      if (data.length != 2){
        throw new Error(`Request response invalid. Expecting a response with only one colon. Please try again.`);
      }
      const genreInput = data[0];
      console.log('uhsdhfasdf', genreInput)
      const tracksdata = await generateSpotifySong(genreInput);
      //checking trackdata
      console.log(tracksdata, 'asdfasdfa')
      if(tracksdata.result) {
        for (var track of tracksdata.result){
          let curr: Track;
          var artistlist = [];
          if(track.artists && track.artists.length > 0 ){
            for (var artist of track.artists){
              artistlist.push(artist.name)
            }
          }
          
          curr = {
            title: track.name ? track.name : "",
            artist: artistlist.join(', '),
            url: track.external_urls.spotify ?  track.external_urls.spotify : "",
            play: track.preview_url ? track.preview_url : "",
            albumArt: track.album.images[0].url,
          }
          tracklist.push(curr)
        }
      }
      return {
        genre: data[0], 
        details: data[1],
        tracks: tracklist
      }
    }catch (error: any) {
      return rejectWithValue(error)
    }
  }
)
//TODO:  put the bottom function inside the top function yes 
export const generateSongs = createAsyncThunk(
  'pokeForm/generateSpotifySong',
  async(genreInput:string) => {
    try {
      const response = await generateSpotifySong(genreInput);
      return {
        name: response.tracks.items[0].name,
        url: response.tracks.items[0].external_urls.spotify
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
      return error;
    }
  }
)

export const pokeSlice = createSlice({
  name: 'pokeForm',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setInput: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.pokemonInput = action.payload
    },
    setCurrentPokedexNumber: (state, action) => {
      state.pokedexNumber = action.payload;
    },
    clearOpenAIOutput: (state) => {
      state.submitOutput = {
        genre: "",
        details: "",
        tracks: []
      } as SubmitOutput;
      state.status = 'idle';
    },
    clearPokeInput: (state) => {
      state.pokemonInput = "";
      state.pokedexNumber = -1;
    },
    increaseGenNum: (state) => {
      if (state.generation >= 7 ){
        state.generation = 1;
      } else {
        state.generation++
      }
    },
    decreaseGenNum: (state) => {
      if (state.generation <= 1 ){
        state.generation = 7;
      } else {
        state.generation--;
      }
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(pokeSubmit.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(pokeSubmit.fulfilled, (state, action) => {
        state.status = 'success'
        state.submitOutput = action.payload as SubmitOutput;
      })
      .addCase(pokeSubmit.rejected, (state, action) => {
        state.status = 'failed'
        console.log('its failing async thunk')
        alert(action.payload);
      } )
  },
})

export const { setInput, clearOpenAIOutput, setCurrentPokedexNumber, clearPokeInput, increaseGenNum, decreaseGenNum} = pokeSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getPokeInput = (state: AppState) => state.pokeForm.pokemonInput
export const getPokedexNumber = (state: AppState) => state.pokeForm.pokedexNumber
export const getGenre = (state: AppState) => state.pokeForm.submitOutput.genre
export const getDetails = (state: AppState) => state.pokeForm.submitOutput.details
export const getTracks = (state: AppState) => state.pokeForm.submitOutput.tracks
export const getStatus = (state: AppState) => state.pokeForm.status
export const getGen = (state: AppState) => state.pokeForm.generation



export default pokeSlice.reducer