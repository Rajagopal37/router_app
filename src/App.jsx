import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {All} from './pages/All/All';
import FSD from './pages/FSD/FSD';
import Cyber from './pages/Cyber/Cyber';
import Navbar from './components/Navbar/Navbar.jsx';
import DataScience from './pages/Datasciece/DataScience.jsx';


const App = () => {
  return (
    <>
      
      <Router>
        <Navbar/> 
          <Routes className="route">
              <Route path='/' element={<All/>}/>
              <Route path='/all' element={<All/>}/>
              <Route path='/fsd' element={<FSD/>}/>
              <Route path='/cyber' element={<Cyber/>}/>
              <Route path='/data' element={<DataScience/>}/>
          </Routes>
      </Router>
    
      

    </>
  )
}

export default App