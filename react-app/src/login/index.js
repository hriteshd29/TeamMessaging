import React from 'react';
import style from './style.module.css'
import Input from '.././component/input/index.js'
import Button from '.././component/button/index.js'
import {Link} from "react-router-dom"

export default function Login(){
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [users, setUsers] = React.useState([]);

  function onEmailChange(event){
    setEmail(event.target.value)
  }

  function onPassChange(event){
    setPass(event.target.value)
  }

  function onLogin(){
    let user = {
      id: "User"+Date.now(),
      email: email,
      pass: pass
    }
    users.push(user)
    setUsers([...users])
  }
  
  return (
    <div className ={style.container}>
    <h1>Team Messaging welcomes you</h1>
    <Input text="Email Address" type="email" onChange={onEmailChange}/>
    <Input text="Password" type="pass" onChange={onPassChange}/>
    <Link to="/home"><Button text="Home" type="login" onClick={onLogin}/></Link>
    <Link to="/signup"><Button text="Add Account" type="create"/></Link>
    </div>
  )
}