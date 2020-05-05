import React ,{Component} from "react"


class Student extends Component{
  constructor(props){
    super(props)
    this.state={
      name:"Md Riyaz Ansari",
      roll:this.props.roll
    }
  }
  render(){
    return(
     <h1>Hello {this.state.name},Roll {this.state.roll} </h1> 
    )
  }
}


/*
this Without Constructor of State of Component 
class Student extends Component{
  state={
    name:"Riyaz",
    roll:this.props.roll
  }
  render(){
    return(
      <h1>Hello {this.state.name},Roll {this.state.roll} </h1>
    )
  }
}*/
export default Student 