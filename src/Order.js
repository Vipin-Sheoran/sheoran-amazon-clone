import React from 'react'
import './Order.css'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from './CheckoutProduct'

function Order({order}) {
    // console.log(order.data.basket.split('{},'))
    return (
        <div className='order'>
           <h2>Order</h2> 
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
        <p className='order__id'>
        <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item=>(
            <CheckoutProduct
            image={item.image}
            price={item.price}
            rating={item.rating}
            id={item.key}
            title={item.title}
            hideButton/>
        ))}
        <CurrencyFormat
        renderText={(value)=>
            (
            <h3 className='order__total'>Order Total:{value}</h3>
           
            )}
            decimalScale={2}
            value={order.data.amount/100}
            displayType={'text'}
            thousandSeperator={true}
            prefix={'₹'}/>
        
        </div>

     
    )
}

export default Order
