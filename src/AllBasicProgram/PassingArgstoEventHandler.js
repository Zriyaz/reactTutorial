import React,{Component} from "react"

class Student extends Component{
   state={
     id:1,
      name:"Riyaz",
   }
  handleClick=(id,e)=>{ 
    console.log(id)
    console.log(e)
    }
    /*handleClickArg=(e)=>{
      this.handleClick(this.state.id,e)
    }*/

  render(){
    return(
      <div>
      <h1>Hello </h1>
      <h2>Name {this.state.name}</h2>
      /*
      <button onClick={this.handleClickArg=(e)=>{
        this.handleClick(this.state.id,e)
        }}>Delete</button>
        */ 
        <button onClick={this.handleClick.bind(this,this.state.id)}>Delete</button>

      </div>
    )
  }
}
export default Student 