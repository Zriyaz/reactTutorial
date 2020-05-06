Cimport React,{Component} from "react"
import Marks from "./Marks"

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      roll:14
    }
  }
  clickHandle=()=>{
    console.log("Button Clicked")
    //this.setState({roll:200})
    this.setState({roll:this.state.roll+2})
  }
  render(){
    console.log("Student rendered")
    return(
      <div>
      <Marks roll={this.state.roll}/>
      <button onClick={this.clickHandle}>Change</button>
      </div>
    )
  }
}