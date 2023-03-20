import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, ErrorPage, Counter } from './pages'

import './App.css'
import { Navbar } from './components'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
