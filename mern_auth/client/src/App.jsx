import Header from './components/Header'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Errors from './components/Errors'

function App() {

  return (
    <Router>
      <Header />
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Errors />} />
      </Routes>


    </Router>
  )
}

export default App
