import React from "react"


function Student(props){
function handleClick(e){
  e.preventDefault()
  console.log("Button Clicked")
}
return (
  <div>
  <h1>Hello {props.name} </h1>
  <button onClick={handleClick} >Click Me</button>
  <a href="http://www.geekyshows.com" onClick={handleClick}>Click Me</a>
  </div>
)
}
export default Student