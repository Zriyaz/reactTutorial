import React,{Component} from "react"
import Student from "./Student"

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      roll:"14"
    }
  }
  clickhandle=()=>{
    console.log("Button Clicked")
    this.setState({roll:200})
  }
  render(){
    return(
      <div>
      <Marks roll={this.state.roll}/>
      <button onClick={this.clickHandle}>change</button>
      </div>
    )
  }
}