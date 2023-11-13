import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/Home/Route.Home';
import LoginRoute from './routes/Login/Route.Login';
import ProfileRoute from './routes/Profile/Route.Profile';
import QuestionsRoute from './routes/Questions/Route.Questions';
import AnswersRoute from './routes/Answers/Route.Answers';
import SupportRoute from './routes/Support/Route.Support';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleQuestionRoute from './routes/SingleQuestion/Route.SingleQuestion';
import Admin from './routes/Admin/Route.Admin';

function App() {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);
 

  useEffect(() => {
    let verifyUser = { token: sessionStorage.getItem('JWT') };
    if (!verifyUser.token) {
      sessionStorage.clear();
    } else {
      axios
        .post('http://localhost:5000/api/verifytoken', verifyUser)
        .then((res) => {
          if (res.data.verified === false) {
            //  sessionStorage.clear();
            console.log('no verified');
            console.log(res.data);
          } else if (res.data.user.superuser === true) {
            setUser(res.data.user);
            setAdmin(true);
          } else {
            setUser(res.data.user);
          }
        });
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomeRoute  user={user} />} />
        <Route path='/' element={<LoginRoute user={user} />} />
        <Route path='/profile' element={<ProfileRoute user={user} />}/>
        <Route path='/questions' element={<QuestionsRoute user={user} />}/>
        <Route path='/answers' element={<AnswersRoute user={user} />}/>
        <Route path='/support'element={<SupportRoute  user={user} />}/>
        <Route path="/admin" element={<Admin admin={admin}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

