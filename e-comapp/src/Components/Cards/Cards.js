import React, { useEffect, useState } from 'react'
import './cards.css'
import axios from 'axios'
import BASE_URL from '../../config'

function Cards() {

    const [product, setProduct] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {

            const res = await axios.get(`${BASE_URL}/prod`)
            setProduct(res.data);
        }
        fetchProducts()
    }, [])

    return (
        <div className="cards">
            <div className="cards-catergory">
                <h1 className="cards-title">Our Top Categories</h1>

                <div className="card-category">
                    <span>Sorted By :</span>
                    <div className="card-category-sort">All Category <i class="fa-solid fa-list"></i></div>
                </div>

            </div>
            <div className='cards-category-items'>

                {product.map((products) => (
                    <>
                        <div className="cards-items">
                            <div className="card-img">
                                <img src={products.image} alt="" />
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div className="card-items-title">
                                <span className="card-title">{products.name}</span>
                                <p className="card-desc">{products.desc}</p>
                            </div>
                            <div className="card-items-price">
                                <span className="item-price">Rs {products.price}/-</span>
                                <div className='items-icon'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <button><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                        </div>
                    </>


                ))}


            </div>
        </div>
    )
}

export default Cards