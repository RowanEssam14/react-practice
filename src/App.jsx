import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Header, Footer } from './components'
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
        </Routes>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
