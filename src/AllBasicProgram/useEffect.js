import React, {useState,useEffect} from "react"

export default function App(){

 const [count,setCount]=useState(0)
 const [count1,setCount1]=useState(100)

const handleInc=()=>{
  setCount(count+1)
}
const handleDec=()=>{
  setCount1(count1-1)
}
useEffect( ()=>{
  console.log("useEffect")
},[count,count1])
  return <>
  <h1>Count Up: {count}</h1>
  <button type="button" onClick={handleInc}>Increment</button>
  <h1>Count Up: {count1}</h1>
  <button type="button" onClick={handleDec}>Decrement</button>

  </>
}