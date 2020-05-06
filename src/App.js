import React from "react"
import Menu from "./Menu"
import About from "./About"
import Contact from "./Contact"
 export default function App(){
  return(

    <div>
     <Menu/>
     <Home/>
     <About/> 
     <Contact/> 
    </div> 
  )
}
const Home=()=>{
  return(
    <div className="Contactstyle">
     <h1>Welcome to home page </h1>
    </div>
  )
}
