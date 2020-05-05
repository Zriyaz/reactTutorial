import React,{Component} from "react"

class Student extends Component{
 

  //binding this keyword with handleClick function 
  constructor(props){
    super(props)
    this.state={
      name:"Riyaz",
      roll:this.props.roll
    }
    //this.handleClick=this.handleClick.bind(this);
  }
  /*this gives undefined this tos solve this problem use Arrow Function
  handleClick(){
    console.log("Button Clicked",this)
  }*/ 
  handleClick=()=>{
    console.log("Button Clicked",this)
  }
  render(){
    return(
      <div>
      <h1>Event Handling Example Name:{this.state.name} Roll:{this.state.roll}</h1>
      <button onClick={this.handleClick}>Click Me </button>
      </div>
    )
  }
} 
export default Student