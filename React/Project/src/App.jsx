import "./App.css";
import Home from "./page/home/Home";
import Todo from "./page/todo/Todo";
import { Route } from "react-router-dom";
import Project from "./pages/Home/index";
import Login from "./page/login/Login";
import Signin from "./page/singin/Signin";
import { useState } from "react";

function App() {
  const [user, setUser] = useState()
  return (
    <div>
      <Route path="/" exact>
        <Home user={user}/>
      </Route>
      <Route path="/Todo">
        <Todo />
      </Route>
      <Route path="/Project">
        <Project />
      </Route>
      <Route path="/Login">
        <Login setUser={setUser}/>
      </Route>
      <Route path="/Signin">
        <Signin />
      </Route>
    </div>
  );
}

export default App;
