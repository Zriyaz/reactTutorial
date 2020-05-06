import React,{Component} from "react"

export default class Marks extends Component{
  constructor(props){
    super(props)
    this.state={
      mroll:this.props.roll
    }
  }
  static getDerivedStateFromProps(props,state){
    console.log("get Derived From Props")
    console.log(props,state)
    if(props.roll!==state.mroll)
    return{mroll:props.roll}
    return null;
  }
  shouldComponentUpdate(nextprops,nextstate){
    if(this.state.mroll<20){
    console.log("marks->Should shouldComponentUpdate")
    console.log(nextprops,nextstate)
    return true
    } 
    console.log(nextprops,nextstate)
    return false 
  }
  getSanpshotBeforeUpdate(prevprops,prevstate){
    console.log("marks->getShanapShotBeforeUpdate it run before update")
    console.log(prevprops,prevstate)
    return 50
  }
  componentDidUpdate(prevprops,prevstate,snapshot){
    console.log("marks-> componentDidUpdate. it reun after update ")
    console.log(prevprops,prevstate,snapshot)
  }
  render(){
    console.log("Marks Rendered")
    return(
      <div>
      <h1>{this.state.mroll}</h1>
      </div>
    )
  }
}