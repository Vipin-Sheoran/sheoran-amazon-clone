import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link}  from 'react-router-dom'
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

function Header() {
    const [{ basket,user },]=useStateValue()
    
     const authenticationHandler=()=>{
      auth.signOut()
    }

    return (<div className='app__header'>
        <Link to='/'>
        <div >
            <img className='app__logo' src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" alt=''/>
            
        </div>
        </Link>
        
        <div className='header__search'>
            
        <input className='header__searchinput' type='text'></input>
        <SearchIcon className="header__searchicon"/>
        </div>


        <div className="header__navbar">
            <Link to={!user && '/login'}>
            <div onClick={authenticationHandler} className='header__option'>
             <span className='header__optionone'>{user?`hello ${user.email}`:`Hello Guest`}</span>
            <span className='header__optiontwo'>{user?'Sign Out':'Sign In'}</span>
            </div>
            </Link> 
            <Link to='/orders'>
            <div className='header__option'>
            <span className='header__optionone'>return</span>
            <span className='header__optiontwo'>& orders</span>
            </div>
            </Link>
            
            <div className='header__option'>
            <span className='header__optionone'>try</span>
            <span className='header__optiontwo'>prime</span>
            </div>
            <Link to='/checkout'>
            <div className='header__openBasket'>
                <ShoppingBasketIcon/>
                <span className='header__optionlinetwo header__BasketCount'>
                    {basket?.length}
                </span>
            </div>
            </Link>
            
        </div>
        </div>
    )
}

export default Header
