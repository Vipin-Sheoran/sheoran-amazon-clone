import React,{useEffect} from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import SlideZoom from './zoomout'
import Orders from './Orders'
import Slideshow from './slideshow'

const promise=loadStripe('pk_test_51HRr6IFrqO60PvxDSdtrsXSXHpUjlotvPryWZAx8HZo6AYk39vxjgdUOT2MKEm9iOHUmy5lLKf7khSDa0AmYDRnG00a0BkWqeh')

function App() {

  const [{},dispatch]=useStateValue()

  useEffect(() => {
    //this authuser will exists until we signout
    //will only run once when the app component reloads
    auth.onAuthStateChanged(authUser=>{

      if(authUser){
      //the user just logged in / the user was logged in
      dispatch({
        type:'SET_USER',
        user:authUser
      })
      }else{
        //the user is logged out
      dispatch({
        type:'SET_USER',
        user:null
      })
      }

    })
  }, [])

  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route path="/orders">
          <Header/>
          <Orders/>
          </Route>
          <Route path='/login'>
            {/* <HamburgerMenu/> */}
          <Login></Login>
          </Route>
          <Route path='/payment'>
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
          
          </Route>
          <Route path='/checkout'>
          <Header/>
          {/* <Slideshow /> */}
          <Checkout/>
          </Route>
          <Route path='/'>
          <Header/>
          <SlideZoom/>
          {/* <Slideshow /> */}
          <Home/> 
          
          </Route>
        </Switch>
      
      
    </div>
    </Router>
    
  );
}

export default App;
