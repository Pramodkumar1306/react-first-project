import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Countary from './pages/Countary.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<App />} >
        <Route path='' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Countary' element={<Countary />} />
        <Route path='/Contact' element={<Contact />} />
        
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
