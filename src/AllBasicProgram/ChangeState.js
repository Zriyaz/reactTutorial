import React,{Component} from "react"

class Student extends Component{
  constructor(props){
    super(props)
    this.state={
      name:"Riyaz",
      roll:this.props.roll
    }
  }
  /* setState taking object
  handleClick=()=>{
    this.setState({name:"Md Riyaz Ansari",roll:"16"})
  }*/

   handleClick = ()=>{
     this.setState((state,props)=>{
        console.log(state)
        console.log(props.roll)
     })
   }

  render(){
    return(
      <div>
      <h1>Hello </h1>
      <h2>Name {this.state.name} Roll {this.state.roll}</h2>
      <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
export default Student 