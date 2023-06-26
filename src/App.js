import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import AnnouncementBar from './components/AnnouncementBar';


function App() {
  return (
    <>
    <AnnouncementBar/>      
    <NavBar/>  
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='*'element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
