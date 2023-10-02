import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/Home/Route.Home';
import LoginRoute from './routes/Login/Route.Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute/>}/>
        <Route path="/login" element={<LoginRoute/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
