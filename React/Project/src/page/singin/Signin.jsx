import React from "react";
import "./Signin.css";
import { useState } from 'react';

function Signin() {
  console.log(useState('ben'))

  return (
    <div className="loginbg">
      <div className="login">
        <div className="login-username">
          <div className="login-name">
            <label for="username">Username</label>
            <br />
            <input type="text" name="username" id="username" />
          </div>
        </div>
        <div className="login-password">
          <label for="user-pw">Password</label>
          <br />
          <input id="user-pw" type="password" name="user-pw" />
        </div>

        <div className="signbt">
          <input id="enterAdd" type="submit" value="Sign Up"/>
        </div>
      </div>
    </div>
  );
}
export default Signin;
