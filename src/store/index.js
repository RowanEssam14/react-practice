import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/characters'
import episodesReducer from './slices/episodes'

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
  },
})

export default store
