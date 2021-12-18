import React from 'react'
import './Checkout.css'
import Subtotal from '../../components/subtotal/Subtotal'
import CheckoutProduct from '../../components/checkoutProduct/CheckoutProduct'
import {useStateValue} from '../../reducer/StateProvider'
// import FlipMove from 'react-flip-move'

function Checkout() {
    const [{basket,user},]=useStateValue()
            
    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/INTEL/SFH/LFH--Learn--Banner--1500x200.jpg' alt=''></img>
            <div className='checkout__right'>
                <Subtotal/>
            </div>
            <div>
            <h3>{user?`Hello,${user.email}`:`Hello,Guest`}</h3>
                <h2 className='checkout__title'>
                 Your Shopping Basket
                </h2>
                
                {
                  basket?.map(item=>
                        ( 
                        <CheckoutProduct
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        id={item.id}
                        title={item.title}/>
                        )
                    )
                }   
               
              
            </div>
            </div>
            
            
        </div>
    )
}

export default Checkout
