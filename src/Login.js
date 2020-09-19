import React,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const history = useHistory()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const SignIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then(auth=>{
        history.push('/')
        })
    }
    const register=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
        console.log(auth)
        if(auth){
            history.push('/')
        }})
       
        .catch(error=>{
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <Link to="/">
            <img className='login__image'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png' alt=''/>
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' onChange={e=>setEmail(e.target.value) } value={email}/>
                    <h5>Password</h5>
                    <input type='password' onChange={e=>setPassword(e.target.value)} value={password} />
                    <button className='login__signIn' type='submit' onClick={SignIn}>Sign-In</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button className='login__register' type="submit" onClick={register}>Create Your Amazon Account</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login
