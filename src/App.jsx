import { Routes, Route } from 'react-router-dom'
import { Header, CardDetail, Footer } from './components'
import { Episodes, Characters, Planets, Species, Starships, Vehicles } from './pages'
import { ROUTES, MESSAGES } from './constants'

import {
  getCharacterDetails,
  getEpisodeDetails,
  getPlanetDetails,
  getVehicleDetails,
  getSpeciesDetails,
  getStarshipDetails,
} from './helper'

import { useSelector } from 'react-redux'

function App() {
  const { characters, episodes, planets, species, vehicles, starShips } = useSelector((state) => ({
    characters: state.characters.characters,
    episodes: state.episodes.episodes,
    planets: state.planets.planets,
    species: state.species.species,
    vehicles: state.vehicles.vehicles,
    starShips: state.starShips.starShips,
  }))

  return (
    <main className="main-container">
      <Header />
      <Routes>
        <Route index element={<Episodes />} />
        <Route path={ROUTES.EPISODES} element={<Episodes />} />
        <Route
          path={ROUTES.EPISODES_DETAILS}
          element={
            <CardDetail
              data={episodes}
              details={getEpisodeDetails}
              notFoundMessage={MESSAGES.EPISODE_NOT_FOUND_ERROR}
            />
          }
        />

        <Route path={ROUTES.CHARACTERS} element={<Characters />} />
        <Route
          path={ROUTES.CHARACTERS_DETAILS}
          element={
            <CardDetail
              data={characters}
              details={getCharacterDetails}
              notFoundMessage={MESSAGES.CHARACTER_NOT_FOUND_ERROR}
            />
          }
        />

        <Route path={ROUTES.PLANETS} element={<Planets />} />
        <Route
          path={ROUTES.PLANETS_DETAILS}
          element={
            <CardDetail data={planets} details={getPlanetDetails} notFoundMessage={MESSAGES.PLANET_NOT_FOUND_ERROR} />
          }
        />

        <Route path={ROUTES.SPECIES} element={<Species />} />
        <Route
          path={ROUTES.SPECIES_DETAILS}
          element={
            <CardDetail data={species} details={getSpeciesDetails} notFoundMessage={MESSAGES.SPECIES_NOT_FOUND_ERROR} />
          }
        />

        <Route path={ROUTES.STARSHIPS} element={<Starships />} />
        <Route
          path={ROUTES.STARSHIPS_DETAILS}
          element={
            <CardDetail
              data={starShips}
              details={getStarshipDetails}
              notFoundMessage={MESSAGES.STARSHIP_NOT_FOUND_ERROR}
            />
          }
        />

        <Route path={ROUTES.VEHICLES} element={<Vehicles />} />
        <Route
          path={ROUTES.VEHICLES_DETAILS}
          element={
            <CardDetail
              data={vehicles}
              details={getVehicleDetails}
              notFoundMessage={MESSAGES.VEHICLE_NOT_FOUND_ERROR}
            />
          }
        />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
