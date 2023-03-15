
import {useEffect, useState} from "react";
import axios from "axios"
const AddFriend = () => {
    const [status, setStatus]= useState([]); 
    const [status1, setStatus1]= useState([]); 
    var token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://localhost:6060/friends/request', {
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
            <h1>Заявки в друзья</h1>
            {status.friends.map(status => {
                return (
                    <div>
                    <p>{}</p>
                    <p>Друг: {status.friend} - Статус заявки: {status.status} </p>
                    </div>
                )
            })}
            
        </div>
        )
      }
      return (
        <div>
        <h1>Список друзей</h1>
        <p>Заявок неет</p>  
        </div>
      )
}
export {AddFriend}