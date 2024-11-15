import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Header } from './components'
import { Episodes, Characters } from './pages'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Routes>
          <Route index path="/episodes" element={<Episodes />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
