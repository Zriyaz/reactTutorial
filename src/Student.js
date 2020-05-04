import React ,{Component} from  "react"
import Pt from "prop-types"
class Student extends Component{
  render(){
    return(
    <div>
    <h1> Hello ,{this.props.name}</h1>
    <h2>Your Roll Number: {this.props.roll}</h2>
    </div>
    )
  }
}

Student.propTypes={
  name:Pt.string
}
export default Student
