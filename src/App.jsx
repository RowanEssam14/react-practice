import { Routes, Route } from 'react-router-dom'
import { Header, CardList, Footer } from './components'
import { Episodes, Characters, Planets, Species, Starships, Vehicles } from './pages'
import { ROUTES } from './constants'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Episodes />} />
        <Route path={ROUTES.EPISODES} element={<Episodes />} />
        <Route path={ROUTES.EPISODES_DETAILS} element={<CardList />} />

        <Route path={ROUTES.CHARACTERS} element={<Characters />} />
        <Route path={ROUTES.CHARACTERS_DETAILS} element={<CardList />} />

        <Route path={ROUTES.PLANETS} element={<Planets />} />
        <Route path={ROUTES.PLANETS_DETAILS} element={<CardList />} />

        <Route path={ROUTES.SPECIES} element={<Species />} />
        <Route path={ROUTES.SPECIES_DETAILS} element={<CardList />} />

        <Route path={ROUTES.STARSHIPS} element={<Starships />} />
        <Route path={ROUTES.STARSHIPS_DETAILS} element={<CardList />} />

        <Route path={ROUTES.VEHICLES} element={<Vehicles />} />
        <Route path={ROUTES.VEHICLES_DETAILS} element={<CardList />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
