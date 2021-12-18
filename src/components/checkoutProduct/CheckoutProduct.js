import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../reducer/StateProvider'

function CheckoutProduct({image,title,price,id,rating,hideButton}) {
    const [,dispatch]=useStateValue()
    const removeProduct=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' alt=''
            src={image}
            />
            <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__Price'>
                <small>₹</small>
            <strong>{price}</strong>
            </p>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className='checkoutProduct__rating'>
                {Array(rating)
                .fill()
                .map(()=>
                <span class="fa fa-star checked"></span>)}
            </div>
            {!hideButton&&(<button onClick={removeProduct}>Remove From Basket</button>)}
            
            </div>
        </div>
    )
}

export default CheckoutProduct
