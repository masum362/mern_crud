import AddNewUser from './components/AddNewUser'
import Home from './components/Pages/HomePage.jsx/Home'
import Contact from './components/Pages/AboutPage/Contact'

import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Navbar from './components/DefaultFiles/Navbar'

import "./components/Pages/HomePage.jsx/Home.css"
import Edituser from './components/EditUser'

function App() {

  


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path='/all' element={<Home />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route  path='/adduser' element={<AddNewUser />}/>
        <Route  path='/edit/:id' element={<Edituser />}/>
      </Routes>
    </Router>
  )
}

export default App
