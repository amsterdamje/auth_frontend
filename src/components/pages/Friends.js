import { Routes, Route, Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios"
const Friends = () => {
    const [status, setStatus]= useState([]); 
    const [status1, setStatus1]= useState([]); 
    var token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://localhost:6060/friends', {
          headers: {
            'authorization': token
          }
        })
        .then(response => {
            setStatus(response.data)
        })
        axios.get('http://localhost:6060/uusers', {
        })
        .then(response => {
            setStatus1(response.data)
            console.log(response.data)

        })
      },[token])
      if (status.friends) {
        return (
            <div>
             <Link to="/friends/request">Заявки в друзья</Link>  
            <h1>Список друзей</h1>
            {status.friends.map(status => {
                return (
                    <div>
                    <p>{}</p>
                    <p>Друг: {status.friend} - Статус заявки: {status.status}<button>Удалить из друзей</button></p>  
                    </div>
                )
            })}
            
        </div>
        )
      }
      return (
        <div>
        <h1>Список друзей</h1>
        <p>Список друзей пока что пуст</p>  
        </div>
      )
}
export {Friends}