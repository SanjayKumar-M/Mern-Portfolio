import React from 'react'
import './App.css'

import { Link } from 'react-router-dom'
const App = () => {
  return (
    <div>
       <nav>
          <div>
              <p>MERN</p>
          </div>
          <ul>
            
            <li><Link to='/calculator'>Calculator</Link></li>
            <li><Link to='/api'>API</Link></li>
            
            
          </ul>
        </nav>
        <div className='content'>
          <h2>Hey There! I'm Sanjay Kumar</h2> 
          <h3>Web Developer and Smart Contract Engineer</h3>

        </div>
    </div>
  )
}

export default App