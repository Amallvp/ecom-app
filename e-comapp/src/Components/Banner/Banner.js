import React, { useEffect, useState } from 'react'
import './banner.css'
import Banner1 from '../../Images/Banner1.png'
import Banner2 from '../../Images/Banner2.png'
import Banner3 from '../../Images/Banner3.png'


function Banner() {

    const [open, setOpen] = useState({
        babies: false,
        boys: false,
        girls: false,
    })

    const handleOpen = (category) => {
        setOpen((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }));
    };

    return (

        <>
            <div className="banner">

                <div className="banner-top">
                    <hr className="banner-top-line" />
                    <div className="banner-dropdowns">
                        <div className='banner-dropdown-items'>
                            <span className="banner-dropdown-title">BABIES <i onClick={() => handleOpen("babies")} class={open.babies ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i></span>
                            <ul className={open.babies ? "dropdown-details " : "dropdown-details active"}>
                                <li className="dropdown-lists">T-shirt</li>
                                <li className="dropdown-lists">Shirt</li>
                                <li className="dropdown-lists">Pant</li>
                                <li className="dropdown-lists">Trouser</li>
                            </ul>
                        </div>
                        <div className='banner-dropdown-items'>
                            <span className="banner-dropdown-title">BOYS <i onClick={() => handleOpen("boys")} class={open.boys ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i></span>
                            <ul className={open.boys ? "dropdown-details " : "dropdown-details active"}>
                                <li className="dropdown-lists">T-shirt</li>
                                <li className="dropdown-lists">Shirt</li>
                                <li className="dropdown-lists">Pant</li>
                                <li className="dropdown-lists">Trouser</li>
                            </ul>
                        </div>
                        <div className='banner-dropdown-items'>
                            <span className="banner-dropdown-title">GIRLS <i onClick={() => handleOpen("girls")} class={open.girls ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i></span>
                            <ul className={open.girls ? "dropdown-details " : "dropdown-details active"}>
                                <li className="dropdown-lists">T-shirt</li>
                                <li className="dropdown-lists">Shirt</li>
                                <li className="dropdown-lists">Pant</li>
                                <li className="dropdown-lists">Trouser</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="banner-top-line" />
                </div>

            </div>

           <div className="imageSlider">
            <img className='image-slider1' src={Banner1} alt="" />
           </div>

        </>
    )
}

export default Banner