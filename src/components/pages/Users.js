import { Routes, Route, Link } from "react-router-dom";
import axios from "axios"  
import {useEffect, useState} from "react";

const Users = () => {

    var token = localStorage.getItem('token');
    const [status, setStatus]= useState([]); 
    const [status1, setStatus1]= useState([]); 

    const addfriend = (friendid) => {
        axios.post('http://localhost:6060/friends/addfriend/', {
           friendid
          }, {
            headers: {
              'authorization': token 
            },
          }).then((response) => { 
            setStatus1(response.data.info)
            console.log(response.data.info)
            alert(response.data.info.message);
        });
        };

    useEffect(() => {
        axios.get('http://localhost:6060/users', {
        })
        .then(response => {
            console.log(response.data.friends)
            setStatus(response.data.friends)
        })
      },[])
      
      return (
        
        <div>
            <h1>Список пользователей</h1>
            {status.map(status => {
                return (
                    <p>ID: {status.id} Имя пользователя: {status.name} Возраст: {status.age} 
                    <button class ="fadd" onClick={() => {addfriend(status.id)}}>Add</button>
                    </p>  
                )
            })}
            <Routes>
            </Routes>
            
        </div>
        
    )
}
export {Users}
