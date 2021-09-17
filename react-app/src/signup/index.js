import React from 'react'
import style from './style.module.css'
import Input from '../component/input/index.js'
import Button from '../component/button/index.js'
import {Link} from "react-router-dom"

export default function Signup(){
  const [state, setState] = React.useState({email:"", pass: "", username: "",region:""})

  function onHandleChange(event){
    const {name, value} = event.target;
    setState({...state, [name]: value})
  }

  function onSignup(event){
    event.preventDefault();
    saveUser(state);
  }

  function saveUser(user){
    fetch('https://localhost:number/saveUser', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    }).catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className ={style.container}>
    <h1>Create Account</h1>
    <Input name="email" text="Email Address" type="email" onChange={onHandleChange}/>
    <Input name="region" text="Region" type="none" onChange={onHandleChange}/>
    <Input name="username" text="Username" type="none" onChange={onHandleChange}/>
    <Input name="pass" text="Password" type="pass" onChange={onHandleChange}/>
    <Link to="/"><Button text="Add Account" type="create" onClick={onSignup}/></Link>
    <Link to="/"><Button text="Home" type="login"/></Link>
    </div>
  )
}