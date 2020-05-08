import React from "react"
import ReactDOM from "react-dom"
import faker from "faker"
import CommentDetail from "./CommentDetail"

const App=()=>{
  return(
    <div className="ui container comments">
      <CommentDetail
       author="Md Riyaz Ansari"
       TimeAgo="Todat at 4:36PM"
       Post="Hii Everyone" 
       avatar={faker.image.avatar()}
       />
      <CommentDetail
       author="Ritesh kumar singh"
       TimeAgo="Todat at 1:36PM" 
       Post="kanha ho??"
       avatar={faker.image.avatar()}
       />
      <CommentDetail
       author="Suraj kumar Singh" 
       TimeAgo="Yesterday at 5:6PM" 
       Post="Riyazzzzz jeee" 
       avatar={faker.image.avatar()}
       />
      <CommentDetail 
       author="Khatri" 
       TimeAgo="Todat at 2:20PM" 
       Post="Dubai me"
       avatar={faker.image.avatar()}
       />
      <CommentDetail 
       author="Ankit Kumar Sinha" 
       TimeAgo="Todat at 8:36AM" 
       Post="sab log google meet pe aao jaldi"
       avatar={faker.image.avatar()}
       />
      <CommentDetail
       author="Sunny Kumar" 
       TimeAgo="Todat at 1:00PM" 
       Post="Hi"
       avatar={faker.image.avatar()}
       />
      <CommentDetail
       author="gowrav kumar Singh" 
       TimeAgo="Todat at 4:340PM" 
       Post="kya goro...riyaz"
       avatar={faker.image.avatar()}
       /> 
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector("#root"))
