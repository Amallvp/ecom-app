import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'

function App() {
  return (
    <div>
      <div className="app-main">

        <div className="app-left"></div>
        <div className="app-components">
          <Navbar />
          <Banner/>
        </div>
        <div className="app-right"></div>

      </div>

    </div>
  )
}

export default App
