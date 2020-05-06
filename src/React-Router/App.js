import React from "react"
import Menu from "./Menu"
import About from "./About"
import Contact from "./Contact"

import {BrowserRouter,Route,Switch} from "react-router-dom"

 export default function App(){
  return(
   <BrowserRouter>
    <div>
    <Menu/>
    <Switch>
     <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
    </div> 
    </BrowserRouter>
  )
}
const Home=()=>{
  return(
    <div className="Contactstyle">
     <h1>Welcome to home page </h1>
    </div>
  )
}
