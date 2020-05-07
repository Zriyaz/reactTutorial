import React,{useState} from 'react';
import { Alert,UncontrolledAlert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [visible,setVisible]=useState(true)
  const onDismiss=()=>{
    setVisible(false)
  }
  return (
    <div>
      <Alert color="primary">
        This is a primary alert <a href="https://google.com" className="alert-link">see details</a>
      </Alert>
      <Alert color="info" isOpen={visible} toggle={onDismiss}>
        This is a Controlled Alert with useState      </Alert>
      <Alert color="success">
        This is a success alert — check it out!
      </Alert>
      <UncontrolledAlert color="success">
        This is a UncontrolledAlert
        </UncontrolledAlert>
    </div>
  )
}
export default App