import {useEffect, useState} from "react";
import axios from "axios"
const Profile = () => {

    //Авторизация
    var token = localStorage.getItem('token');
    const [status, setStatus] = useState([]); 
    const logout = () => 
    {
      axios.get('http://localhost:6060/logout', {
        headers: {
          'authorization': token
        }
      })
      .then(response => {
      if(response.data)
      {
        if(response.data.status === 1) {
          setStatus('');
          localStorage.removeItem('token');
        }else{
          console.log('Авторизация не выполнена')
        }
      }
      })
    };

    useEffect(() => {
      axios.get('http://localhost:6060/me', {
        headers: {
          'authorization': token
        }
      })
      .then(response => {
        console.log(response.data)
        setStatus(response.data)
      })
    },[token])
    return (
      <div>
      <h1>Мой профиль</h1>
      {status.ProfileName ? (
          
      <div>
        <p>Имя: {status.ProfileName}</p>
        <p>Возраст: {status.ProfileAge}</p>
      
      <button onClick={logout}>Logout</button>
      </div>
      ) :<div>Войдите в аккаунт</div>
      }
      
      </div>
      
    );
  }
export {Profile}