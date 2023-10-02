import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/Home/Route.Home';
import LoginRoute from './routes/Login/Route.Login';
import ProfileRoute from './routes/Profile/Route.Profile';
import QuestionsRoute from './routes/Questions/Route.Questions';
import AnswersRoute from './routes/Answers/Route.Answers';
import SupportRoute from './routes/Support/Route.Support';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute/>}/>
        <Route path="/login" element={<LoginRoute/>}/>
        <Route path="/profile" element={<ProfileRoute/>}/>
        <Route path="/questions" element={<QuestionsRoute/>}/>
        <Route path="/answers" element={<AnswersRoute/>}/>
        <Route path="/support" element={<SupportRoute/>}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
