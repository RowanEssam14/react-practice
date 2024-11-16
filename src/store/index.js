import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/characters'
import episodesReducer from './slices/episodes'
import planetsReducer from './slices/planets'

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    planets: planetsReducer,
  },
})

export default store
