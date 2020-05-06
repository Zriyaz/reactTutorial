import React from "react"
import useCustomCounter from "./Custome"

export default function App(){
const data=useCustomCounter();
  
  return <>
  <h1>Count up:{data.count}</h1>
  <button type="button" onClick={data.handleIncrement}>Click</button>
  </>
}

 