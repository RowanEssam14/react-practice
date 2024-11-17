import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/characters'
import episodesReducer from './slices/episodes'
import planetsReducer from './slices/planets'
import speciesReducer from './slices/species'
import vehiclesReducer from './slices/vehicles'
import starShipsReducer from './slices/starShips'

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    planets: planetsReducer,
    species: speciesReducer,
    vehicles: vehiclesReducer,
    starShips: starShipsReducer,
  },
})

export default store
