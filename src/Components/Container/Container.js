import "./Container.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Axios from 'axios';

function Container({click}) {
  
    const [users, setUsers] = useState(null);
    const [loader, setLoader]  = useState(false);
    

    const getUsers = () =>{
        setLoader(true);
        Axios.get("https://reqres.in/api/users?page=1")
            .then((response) =>{
                setUsers(response.data.data);

                
            })
            setLoader(false);
    }

    useEffect(() => {
        click &&
         getUsers();
    }, [click])

  return (
    <div className="container">
      {users&&users.map((data) => {
          return(
        <Card first_name={data.first_name} last_name={data.last_name} 
        email={data.email} avatar={data.avatar} />
          )
      })}
      <Loader show={loader}/>
    </div>
  );
}

export default Container;
