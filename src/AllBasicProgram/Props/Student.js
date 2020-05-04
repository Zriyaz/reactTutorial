import React ,{Component} from  "react"

//This is Class Component
class Student extends Component{
  render(){
    return(
    <div>
    <h1> Hello ,{this.props.name}</h1>
    <h2>Your Roll Number: {this.props.roll}</h2>
    </div>
    )
  }
}

//This is Functional Component
/*
const Student=props=>{
  return (
    <div>
    <h1> Hello ,{props.name}</h1>
    <h2>Your Roll Number: {props.roll}</h2>
    </div>
  )
} */
export default Student
