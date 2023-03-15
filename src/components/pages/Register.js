import {useEffect, useState} from "react";
import axios from "axios"
const Register = () => {
    //Авторизация
    const [status1, setStatus1]= useState([]); 
    const [status, setStatus] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [mail, setEmail] = useState('');
    const [password2, setPassword] = useState('');
    const [confirmPassword2, setPassword2] = useState('');
    var token = localStorage.getItem('token');

    const auth = () => {
        axios.post('http://localhost:6060/register/', {
        mail,
        password2,
        age,
        name,
        confirmPassword2
        }).then((response) => { 
            setStatus(response.data)
            console.log(response.data.message)
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

          if (status1.status === 1)  
          {
            return <h1>Выйдите из аккаунта, чтобы зарегистрироваться</h1>;
          }
          if (status.status === 0)  
          {
            return <h1>{status.message}</h1>;
          }
          if (status.status === 1)  
          {
            return <h1>Вы успешно зарегистрировались</h1>;
          }
          return (
            <div>
            <h1>Регистрация</h1>

            <p>Имя: <input onChange={(e) => setName(e.target.value)}/> </p>
            <p>Возраст: <input onChange={(e) => setAge(e.target.value)}/></p>

            <p>Электронная почта: <input onChange={(e) => setEmail(e.target.value)}/></p>
            <p>Пароль: <input onChange={(e) => setPassword(e.target.value)}/></p>
            <p>Повторите пароль: <input onChange={(e) => setPassword2(e.target.value)}/></p>
            <button onClick={auth}>Auth</button>
            </div>
          )
          
}
export {Register}