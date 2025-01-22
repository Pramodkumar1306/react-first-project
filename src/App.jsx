import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'
import Headr from './component/header'
import Footer from './component/Footer'
function App() {


  return (
    <>
      <Headr />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
