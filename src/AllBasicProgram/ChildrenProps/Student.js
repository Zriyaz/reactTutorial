import React, {Component} from "react"

class Student extends Component{
  render(){
    return(
      <h1>Hello Kazmi,{this.props.children}</h1>
    )
  }
}

/*
const Student=props=>{
  return <h1>Hello Riyaz,{props.children}</h1>
}*/
export default Student