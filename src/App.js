import Navbar from './Components/Navbar/Navbar'
import Container from './Components/Container/Container'
import Before from './Components/BeforeClick/Before';
import Loader from './Components/Loader/Loader';
import { useState} from "react";

import './App.css'
function App() {
  const [clicked , setClick] = useState(false);
  const [loader, setLoader]  = useState(false);

  const setClicked = (props)=>{
    setClick(props)

  }

  const getUser = (props)=>{
    setLoader(true);
    console.log(true)
    
    
  }
  const getUserOff = (props)=>{
    setLoader(false);
    console.log(false)

  }
  
 

  
  

  return (
    <div className="app">
      <Navbar clickedInNav = {setClicked} />

      {!clicked && <Before/>}
      {(clicked && loader) ? <Loader /> : <Container getUserO={getUserOff} getUserDone = {getUser}  click = {clicked} />   }
       
     
    </div>
  )
}

export default App
