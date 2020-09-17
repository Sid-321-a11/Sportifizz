import React from 'react'
import "./Product.css"

function Product({ id, price, image, title, rating  }) {
    return (
        <div className="product">
        <div className="product-info">
        
        <p>{title}</p>
        <p className="product-price">
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className="product-rating">
        {Array(rating)
        .fill()
        .map((_) => (
            <p>✨</p>
        ))}
        </div>
        
        </div>
           
            <img src={image} alt=""/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
