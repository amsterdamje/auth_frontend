import {useEffect, useState} from "react";
import axios from "axios"
const Auth = () => {
    //Авторизация
    const [status, setStatus]= useState([]); 
    const [status1, setStatus1]= useState([]); 
    const [email, setEmail]= useState(''); 
    const [password, setPassword] = useState('');
    var token = localStorage.getItem('token');

    const auth = () => {
        axios.post('http://localhost:6060/auth/', {
        email,
        password,
        }).then((response) => { 
            localStorage.setItem('token',response.data.token); //  temp
            setStatus(response.data); 
        });
        };
        
        useEffect(() => {
            axios.get('http://localhost:6060/me', {
              headers: {
                'authorization': token
              }
            })
            .then(response => {
                setStatus1(response.data); 
            })
          },[token])
          if (status.status === 0)  
          {
            return <h1>Данные неверны</h1>;
          }
          if (status1.status === 1) {
            return <h1>Привет, {status1.ProfileName}</h1>;
          }
          return (
            <p>
            Email: <input onChange={(e) => setEmail(e.target.value)}/>
            Password: <input onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={auth}>Auth</button>
            </p>
          )
}
export {Auth}