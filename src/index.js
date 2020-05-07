import React from "react"
import ReactDOM from "react-dom"
import faker from "faker"
import CommentDetail from "./CommentDetail"

const App=()=>{
  return(
    <div className="ui container comments">
      <CommentDetail author="Md Riyaz"/>
      <CommentDetail author="Ritesh kumar"/>
      <CommentDetail author="Suraj Singh"/>
      <CommentDetail author="kazmi"/>
      <CommentDetail author="Pankaj"/>
      <CommentDetail author="Maisha"/>
      <CommentDetail author="Sarmila"/> 
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector("#root"))
