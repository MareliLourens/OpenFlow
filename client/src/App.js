import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/Home/Route.Home';
import LoginRoute from './routes/Login/Route.Login';
import ProfileRoute from './routes/Profile/Route.Profile';
import QuestionsRoute from './routes/Questions/Route.Questions';
import AnswersRoute from './routes/Answers/Route.Answers';
import SupportRoute from './routes/Support/Route.Support';
<<<<<<< Updated upstream
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleQuestionRoute from './routes/SingleQuestion/Route.SingleQuestion';
import Admin from './routes/Admin/Route.Admin';
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<HomeRoute/>}/>
        <Route path="/login" element={<LoginRoute/>}/>
        <Route path="/profile" element={<ProfileRoute/>}/>
        <Route path="/questions" element={<QuestionsRoute/>}/>
        <Route path="/answers" element={<AnswersRoute/>}/>
        <Route path="/support" element={<SupportRoute/>}/>  
=======
        <Route path="/" element={<HomeRoute admin={admin} user={user}/>}/>
        <Route path="/login" element={<LoginRoute admin={admin} user={user}/>}/>
        <Route path="/profile" element={<ProfileRoute admin={admin} user={user}/>}/>
        <Route path="/questions" element={<QuestionsRoute admin={admin} user={user}/>}/>
        <Route path="/answers" element={<AnswersRoute admin={admin} user={user}/>}/>
        <Route path="/support" element={<SupportRoute admin={admin} user={user}/>}/>
        <Route path="/singlequestion" element={<SingleQuestionRoute admin={admin} user={user}/>}/>
        <Route path="/admin" element={<Admin admin={admin}/>}/>
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

export default App;
