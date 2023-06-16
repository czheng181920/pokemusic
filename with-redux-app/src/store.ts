import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import pokeSliceReducer from './features/pokeForm/pokeSlice'

export function makeStore() {
  return configureStore({
    reducer: { pokeForm: pokeSliceReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// Global count variable:
let count = 0;

// Change code below this line
function callback(){
  count++;
}
store.subscribe(callback);
// Change code above this line

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
