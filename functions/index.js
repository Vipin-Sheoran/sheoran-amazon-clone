const functions = require('firebase-functions');

const express=require('express')
const cors = require('cors')
const stripe=require('stripe')('sk_test_51HRr6IFrqO60PvxDdtvnERPAtYR2zERx3FLZhfSWauf65vbO5f8yi2QSRH8r1djxryjACEAsX4cVRQRH1wkA6GMj00p5HBzstj')

const app=express()

app.use(cors({origin:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('hello world')
})

app.post('/payments/create',async (request,response)=>{
    const total=request.query.total

    console.log('Payment Request Recieved BOOM!!',total)

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:'INR'
    })

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

exports.api=functions.https.onRequest(app)

//https://localhost:5001/sheoran-clone/us-central1/api