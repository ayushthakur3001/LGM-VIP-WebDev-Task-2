import "./Container.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Axios from 'axios';


function Container(props) {
  const [loader, setLoader]  = useState(false);
    const [users, setUsers] = useState(null);
    
    

    const getUsers = () =>{
        
      setLoader(true);
        Axios.get("https://reqres.in/api/users?page=1", {timeout: 1100})
            .then((response) =>{
                setUsers(response.data.data);
                setLoader(false);
                
            })
 
            
    }

    
    

    useEffect(() => {
      const identifier = setTimeout(()=>{
        props.click &&
         getUsers();
         
      },1000)

      return ()=>{
        clearTimeout(identifier);
        setLoader(true);
      };
        
    }, [props.click])

    

  
    return (

    <div className="container">
    
    
    {users && users.map((data) => {
            return(
            <Card key={data.id} first_name={data.first_name} last_name={data.last_name} 
            email={data.email} avatar={data.avatar} />
            )
            })} 
    <Loader load={loader} />

    </div>

  )
}

export default Container;
