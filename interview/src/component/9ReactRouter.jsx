import React from 'react'
import Home from './9router/Home'
import About from './9router/About'
import {BrowserRouter ,Link, Route,Routes} from 'react-router-dom'

function ReactRouter() {
  return (
    <BrowserRouter>
       <ul className='flex gap-5'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>about</Link>
        </li>
       </ul>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

export default ReactRouter