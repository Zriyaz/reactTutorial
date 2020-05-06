import React, {useState} from "react"

export default function App(){
 /* const variable=useState("Riyaz")
  const name=variable[0]
  const setName=variable[1]
*/
const[name,setName]=useState("Md Riyaz")
const[roll,setRoll]=useState(14)
const handleClick=()=>{
  setName("kazmi") 
  setRoll(100)
}

  return <>
  <h1>Name:{name}</h1>
  <h2>Roll : {roll}</h2>
  <button type="button" onClick={handleClick}>Change</button>
  </>
}