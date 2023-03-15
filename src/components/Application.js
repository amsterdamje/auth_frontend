import { Routes, Route, Link } from "react-router-dom";

import { Profile } from './pages/Profile'; 
import { Friends } from './pages/Friends';
import { FriendsRequest } from './pages/FriendsRequest';
import { AddFriend } from './pages/FriendsID';    
import { Notfoundpage } from './pages/Notfoundpage'; 
import { Auth } from './pages/auth'; 
import { Users } from './pages/Users'; 
import { Register } from './pages/Register'; 

function Application() {
    return (
<>
      <header>
        <Link to="/register">Регистрация </Link>
        <Link to="/auth">Войти </Link>
        <Link to="/profile">Профиль </Link>
        <Link to="/friends">Друзья</Link>
        <Link to="/users"> Список пользователей</Link>
      </header>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friends/request" element={<FriendsRequest />} />
        <Route path="/addfriend/" element={<AddFriend />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addfriend" element={<AddFriend />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
    );
  }
  export default Application