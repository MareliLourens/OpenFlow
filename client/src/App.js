import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/Home/Route.Home';
import LoginRoute from './routes/Login/Route.Login';
import ProfileRoute from './routes/Profile/Route.Profile';
import QuestionsRoute from './routes/Questions/Route.Questions';
import AnswersRoute from './routes/Answers/Route.Answers';
import SupportRoute from './routes/Support/Route.Support';
import SingleQuestionRoute from './routes/SingleQuestion/Route.SingleQuestion';
import Admin from './routes/Admin/Route.Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute admin={admin} user={user}/>}/>
        <Route path="/login" element={<LoginRoute admin={admin} user={user}/>}/>
        <Route path="/profile" element={<ProfileRoute admin={admin} user={user}/>}/>
        <Route path="/questions" element={<QuestionsRoute admin={admin} user={user}/>}/>
        <Route path="/answers" element={<AnswersRoute admin={admin} user={user}/>}/>
        <Route path="/support" element={<SupportRoute admin={admin} user={user}/>}/>
        <Route path="/singlequestion" element={<SingleQuestionRoute admin={admin} user={user}/>}/>
        <Route path="/admin" element={<Admin admin={admin}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
