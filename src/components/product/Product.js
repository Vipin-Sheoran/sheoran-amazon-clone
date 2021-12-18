import React from 'react'
import './Product.css'
import {useStateValue} from '../../reducer/StateProvider'

function Product({title,image,price,rating,id}) {
const [state,dispatch]=useStateValue()

const addToBasket=()=>{
    
//dispatch the item into the data layer 
dispatch({
    type:"ADD_TO_BASKET",
    item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
    }
})
// console.log('this is basket',hello)
}
    return (
        
            
        
        <div className='product'>
            <div className='product__info'>
            <p >{title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className='product__rating'>
                {Array(rating).fill()
                .map((_,i)=>(
              <span className="fa fa-star checked"></span>
                ))}
            </div>
            </div>
                <img className='product__image' src={image} alt=''/>
                
                <button onClick={addToBasket} className='button'>Add To Basket</button>
                </div>
    )
}

export default Product
