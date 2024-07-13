import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Cart from './Pages/Cart/Cart'


function App() {
  return (
    <div>
      {/* <div className="app-main">

        <div className="app-left"></div>
        <div className="app-components">
          <Navbar />
          <Banner/>
          <Cards/>
        </div>
        <div className="app-right"></div>

      </div> */}
<Cart/>
    </div>
  )
}

export default App
