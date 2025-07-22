import React from 'react'
import PasswordGenerator from './PasswordGenerator'
import PasswordGenerator22 from './PasswordGenerator22'
import LandingPage from './LandingPage'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
       <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
       </Routes>
    </>
  )
}

export default App

