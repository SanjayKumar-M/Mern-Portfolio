import React from 'react'
import './App.css'

import { Link } from 'react-router-dom'
const App = () => {
  return (
    <div className="container">
       <nav>
          <div className='logo'>
              <p>MERN</p>
          </div>
          <ul>
            
            <li><Link to='/calculator'>CALCULATOR</Link></li>
            <li><Link to='/api'>API</Link></li>
            
            
          </ul>
        </nav>
        <div className='content'>
          <h2>Hey There! I'm Sanjay Kumar</h2> 
          <h3>Web Developer and <span>Smart Contract Engineer</span></h3>
          <p>Click Here to view my Perevious Works</p>
          <a href='https://github.com/SanjayKumar-M' target='/' className='exp'> Explore</a>

        </div>
    </div>
  )
}

export default App