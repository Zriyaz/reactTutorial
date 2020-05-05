import React,{Component} from "react"
import Student from "./Student"

export default class App extends Component{
  constructor(props){
    super(props)
    console.log("App Constructor Called")
    console.log(props)
    this.state={
      roll:"14"
    }
  }
  static getDerivedStateFromProps(props,state){
    console.log("App-get Derived From Props")
    console.log(props,state)
    return null;  
  }
  componentDidMount(){
    console.log('App-componentDidMount(): mounted')
  }
  render(){
    console.log("App rendered")
    return(
      <div>
      <Student name="Md Riyaz Ansari"/>
      </div>
    )
  }
}