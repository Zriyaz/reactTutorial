import React,{Component} from "react"

export default class Marks extends Component{
  constructor(props){
    super(props)
    this.state={
      mroll:this.props.roll
    }
  }
  render(){
    return(
      <div>
      <h1>Marks Component</h1>
      </div>
    )
  }
}