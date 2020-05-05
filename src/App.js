import React,{Component} from "react"
import Student from "./Student"

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      roll:"14"
    }
  }
  
  render(){
    return(
      <div>
      <Marks roll="12"/>
      </div>
    )
  }
}