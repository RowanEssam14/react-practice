import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import { Episodes, Characters } from './pages'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index path="/episodes" element={<Episodes />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </div>
  )
}

export default App
