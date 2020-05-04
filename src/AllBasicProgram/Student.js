import React,{Component} from "react"

//ES6 Functional Component
/*const Student=(props)=>{
  return <h1>Hello {props.name}</h1>
}
function Student(props){
  return <h1> Hello Riyaz</h1>
}
*/
//Class Component 
class Student extends Component{
  render(){
    return <h1> Hello {this.props.name}</h1>
  }
}

export default Student