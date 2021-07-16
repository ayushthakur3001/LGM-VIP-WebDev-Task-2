import Navbar from './Components/Navbar/Navbar'
import Container from './Components/Container/Container'
import Before from './Components/BeforeClick/Before';

import { useState} from "react";

import './App.css'
function App() {
  const [clicked , setClicked] = useState(false);

  return (
    <div className="app">
      <Navbar clickedInNav = {setClicked} />

      {clicked ? <Container click = {clicked} /> : <Before/>}
       
     
    </div>
  )
}

export default App
