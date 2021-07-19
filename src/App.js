import Navbar from "./Components/Navbar/Navbar";
import Container from "./Components/Container/Container";
import Before from "./Components/BeforeClick/Before";

import { useState } from "react";

import "./App.css";
function App() {
  const [clicked, setClick] = useState(false);

  const setClicked = (props) => {
    setClick(props);
  };

  return (
    <div className="app">
      <Navbar clickedInNav={setClicked} />

      {!clicked && <Before />}
      <Container click={clicked}/>

      
    </div>
  );
}

export default App;
