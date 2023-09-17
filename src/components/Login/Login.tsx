import React from 'react'
import style from './Login.module.scss';
import Underline from '../UI/Underline/Underline';

const Login = () => {
  return (

    <form>
      <h1>Login</h1>
      <Underline/>
      <label htmlFor={"email"}>E-mail</label>
      <input id="email-login" name="email" type="email" className={style.input} required></input>

      <label htmlFor={"password"}>Password</label>
      <input id={"password-login"} name={"password"} type={"password"} className={style.input} required></input>

        <div className={"register"}>
             <p className={"register-text"}>Don't have account yet?</p>
             <a className={"register-link"} href={"./index.html"}>Register</a>
        </div>
        <button type="submit" id="login-btn" className={"submit-btn"}>ZALOGUJ</button>
    </form>
  )
  }


export default Login;