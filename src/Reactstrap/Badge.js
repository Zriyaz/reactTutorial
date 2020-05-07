import React from "react"
import {Badge,Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
  return(
  <div>
   <h1> My badge Example <Badge colort="primary">Badge</Badge></h1>
    <Button color="primary" outline>
      Notifications <Badge color="danger">4</Badge>
    </Button>
    <Badge color="success">Check</Badge>
    <Badge color="success" pill>Using Pill</Badge>
    <Badge href="#" color="success">Link</Badge>
  </div>
  )
}
export default App