import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/characters'
import episodesReducer from './slices/episodes'
import planetsReducer from './slices/planets'
import vehiclesReducer from './slices/vehicles'

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    planets: planetsReducer,
    vehicles: vehiclesReducer,
  },
})

export default store
