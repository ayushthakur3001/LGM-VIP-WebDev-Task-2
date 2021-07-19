import './Navbar.css'
import { useState} from "react";
function Navbar({clickedInNav}) {
    
    
    const handleClick = ()=>{
        
        clickedInNav(true);
        
    }
    return (
        <div className="navbar">
            
                <h2>WebMaker</h2>
                <button onClick={handleClick}>Get Users</button>
                
            
        </div>
    )
}

export default Navbar
