import React from 'react'
import './App.css'

import { Link } from 'react-router-dom'
const App = () => {
  return (
    <div className='content'>
      <h1>Click Here to View Projects</h1>
        <ul>
          <li><Link to='/calculator'>Calculator</Link></li>
          <li><Link to='/api'>API Fetching</Link></li>
        </ul>

    </div>
  )
}

export default App