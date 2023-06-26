import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState, AppThunk } from '../../store'

import { generateSpotifySong, submitPokemon } from './pokeOpenAIAPI'

export interface PokeFormState {
  pokemonInput: string
  status: 'idle' | 'loading' | 'failed' | 'success'
  openaiOutput: {genre: string, details: string}[]
  spotifySongs: {name: string, url: string}[]
}

const initialState: PokeFormState = {
  pokemonInput: "",
  status: 'idle',
  openaiOutput: [],
  spotifySongs: [],
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const pokeSubmit = createAsyncThunk(
  'pokeForm/submitPokemon',
  async (pokemonInput: string) => {
    try {
      const response = await submitPokemon(pokemonInput)
      // The value we return becomes the `fulfilled` action payload
      var data = response.result.split(":");
      if (data.length != 2){
        throw new Error(`Request response invalid. Expecting a response with only one colon. Please try again.`);
      }
      return {genre: data[0], details: data[1]}
    }catch (error: any) {
      console.error(error);
      alert(error.message);
      return error;
    }
  }
)

export const generateSongs = createAsyncThunk(
  'pokeForm/generateSpotifySong',
  async(genreInput:string) => {
    try {
      const response = await generateSpotifySong(genreInput);
      return {name: response.tracks.items[0].name, url: response.tracks.items[0].external_urls.spotify}
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
    clearOpenAIOutput: (state) => {
      state.openaiOutput = [];
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
        state.openaiOutput = [...state.openaiOutput, action.payload]
        state.pokemonInput = ''
      })
      // .addCase(generateSongs.pending, (state) => {
      //   state.status = 'loading'
      // })
      // .addCase(generateSongs.fulfilled, (state, action) => {
      //   state.status = 'success'
      //   state.openaiOutput = [...state.openaiOutput, action.payload]
      //   state.pokemonInput = ''
      // })
  },
})

export const { setInput, clearOpenAIOutput } = pokeSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getPokeInput = (state: AppState) => state.pokeForm.pokemonInput
export const getOpenaiOutput = (state: AppState) => state.pokeForm.openaiOutput
export const getStatus = (state: AppState) => state.pokeForm.status



export default pokeSlice.reducer