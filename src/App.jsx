import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Header, CardList, Footer } from './components'
import { Episodes, Characters } from './pages'
import store from './store'
import { ROUTES } from './constants'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Routes>
          <Route index path={ROUTES.EPISODES} element={<Episodes />} />
          <Route path={ROUTES.CHARACTERS} element={<Characters />} />
          <Route path={ROUTES.CHARACTERS_DETAILS} element={<CardList />} />
          <Route path={ROUTES.EPISODES_DETAILS} element={<CardList />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
