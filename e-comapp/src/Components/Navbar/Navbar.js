import React, { useState } from 'react'
import './navbar.css'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    return (
        <div className="navbar">
            <div className="navbar-components">

                {/*----------------Header left section---------------------------------*/}


                <div className="navbar-left">
                    <div className="navbar-left-titles">
                        <span className="navbar-main-title">kiddy</span>
                        <span className="navbar-sec-title">DRESSES</span>
                    </div>
                </div>

                {/*----------------Header right section---------------------------------*/}
                <div className="navbar-right">

                    <div className="searchbox">
                        {isOpen ? <div className='searchbox-items'><i onClick={handleClose} class="fa-solid fa-xmark"></i>
                            <input type="text" placeholder='search' autoFocus /></div> : " "}

                        <div className='icon1' onClick={handleOpen} ><i class="fa-solid fa-magnifying-glass"></i></div>
                    </div>

                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-bell"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-user"></i>

                </div>
            </div>

            
        </div>
    )
}

export default Navbar