import React from "react";
import "./Login.css";
import img from "./clipart2603183.png";
import { Link, Redirect } from "react-router-dom";
import { useState } from 'react';

function Login(props) {
  const [name, setName] = useState('')
  console.log(name)

  const [loginSucces, setLoginSucces] = useState(false)
  return (
    <div className="loginbg">
      {loginSucces && <Redirect to="/" />}
      <div className="login">
        <div>
          <div className="login-img">
            <img src={img} />
          </div>
        </div>
        <div className="login-username">
          <div className="login-name">
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              value={name}
              onChange={(event) => { setName(event.target.value) }}
            />
          </div>
          <div class="login-password">
            <input
              id="user-pw"
              placeholder="Password"
              type="password"
              name="user-pw"
            />
          </div>
        </div>
        {/*<div className="forgot">
            <Link to="/">Forgot Password?</Link>
          </div>*/}
        <div className="signup">
          <Link to="/Signin">Sign Up</Link>
        </div>
        <section className="loginbt">
          <input
            className="loginbt"
            id="enterAdd"
            type="submit"
            value="LOGIN"
            onClick={() => {
              if(!name){
                return
              }
              props.setUser(name)
              setLoginSucces(true)
            }
            }
          />
        </section>
      </div>
    </div>
  );
}

export default Login;
