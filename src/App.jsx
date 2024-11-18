import { Routes, Route } from 'react-router-dom'
import { Header, CardList, Footer } from './components'
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
  const { characters } = useSelector((state) => state.characters)
  const { episodes } = useSelector((state) => state.episodes)
  const { planets } = useSelector((state) => state.planets)
  const { species } = useSelector((state) => state.species)
  const { vehicles } = useSelector((state) => state.vehicles)
  const { starShips } = useSelector((state) => state.starShips)

  return (
    <main className="main-container">
      <Header />
      <Routes>
        <Route index element={<Episodes />} />
        <Route path={ROUTES.EPISODES} element={<Episodes />} />
        <Route
          path={ROUTES.EPISODES_DETAILS}
          element={
            <CardList data={episodes} details={getEpisodeDetails} notFoundMessage={MESSAGES.EPISODE_NOT_FOUND} />
          }
        />

        <Route path={ROUTES.CHARACTERS} element={<Characters />} />
        <Route
          path={ROUTES.CHARACTERS_DETAILS}
          element={
            <CardList data={characters} details={getCharacterDetails} notFoundMessage={MESSAGES.CHARACTER_NOT_FOUND} />
          }
        />

        <Route path={ROUTES.PLANETS} element={<Planets />} />
        <Route
          path={ROUTES.PLANETS_DETAILS}
          element={<CardList data={planets} details={getPlanetDetails} notFoundMessage={MESSAGES.PLANET_NOT_FOUND} />}
        />

        <Route path={ROUTES.SPECIES} element={<Species />} />
        <Route
          path={ROUTES.SPECIES_DETAILS}
          element={<CardList data={species} details={getSpeciesDetails} notFoundMessage={MESSAGES.SPECIES_NOT_FOUND} />}
        />

        <Route path={ROUTES.STARSHIPS} element={<Starships />} />
        <Route
          path={ROUTES.STARSHIPS_DETAILS}
          element={
            <CardList data={starShips} details={getStarshipDetails} notFoundMessage={MESSAGES.STARSHIP_NOT_FOUND} />
          }
        />

        <Route path={ROUTES.VEHICLES} element={<Vehicles />} />
        <Route
          path={ROUTES.VEHICLES_DETAILS}
          element={
            <CardList data={vehicles} details={getVehicleDetails} notFoundMessage={MESSAGES.VEHICLE_NOT_FOUND} />
          }
        />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
