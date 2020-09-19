import React, { useState, useEffect } from 'react'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'
import {getBasketTotal} from './reducer'
import CurrencyFormat from 'react-currency-format'
import {useHistory,Link} from 'react-router-dom'
import axios from './axios'
import {db} from './firebase'


function Payment() {
    const history=useHistory()
    const [{user,basket},dispatch]=useStateValue('')
    const stripe=useStripe()
    const elements=useElements()

    const [error,setError]=useState(null)
    const [disabled,setDisabled]=useState(true)
    const [processing,setProcessing]=useState('')
    const [succeeded,setSucceeded]=useState(false)
    const [clientSecret,setClientSecret]=useState(true)

    useEffect(()=>{
        //generate a special stripe secret which allows us to charge a customer
        const getClientsecret=async()=>{
            const response=await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100 }`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientsecret()
    },[basket])
//    console.log('the secret is ',clientSecret)


    const handleSubmit=async (e)=>{
    //do all the fancy stripe stuff...
    e.preventDefault()
    setProcessing(true)

    const payload=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:elements.getElement(CardElement)
        }
    }).then(({paymentIntent})=>{
        //paymentIntent=paymentConfirmation
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        history.replace('/orders')

        dispatch({
            type:'EMPTY_BASKET'
        })
         console.log(paymentIntent)
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
            // basket:basket[],
            basket:basket,
            amount:paymentIntent.amount,
            created:paymentIntent.created
        })

    })

    }

    const handleChange=(e)=>{
        
    //listen for the changes in card elements
    //and display the errors as the customer adds the card details
    setDisabled(e.empty)
    setError(e.error?e.error.message:'')
    // console.log(JSON.stringify(basket))
    console.log(basket)
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                    <h3>Delievery address</h3>
                    </div>
                   <div className='payment__address'>
                  <p>{user?.email}</p>
                  <p>React Lane</p>
                   <p>haryana</p> 
                </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item=>
                        <CheckoutProduct 
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        id={item.id}
                        title={item.title}/>)


                        }
                    </div>
                </div>
                

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment__pricecontainer'>
                        <CurrencyFormat
                          renderText={(value)=>
                          (<>
                               <p>
                            Subtotal({basket?.length} items):<strong>{value}</strong>
                            </p>
                            {/* <small className='subtotal__gift'>
                            <input type='checkbox' />This order contains a gift
                            </small> */}
                            </>
                          )}
                          decimalScale={2}
                          value={getBasketTotal(basket)}
                           displayType={'text'}
                           thousandSeperator={true}
                           prefix={'₹'}/>
                           <button disabled={processing||disabled||succeeded}>
                            <span>{processing?<p>processing</p>:
                            'Buy Now'}</span>
                           </button>
                        </div>
                        {error&&<div>{error}</div>}  
                        </form>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
