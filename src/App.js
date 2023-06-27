import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import AnnouncementBar from './components/AnnouncementBar';
import WhatWeHave from './pages/WhatWeHave';
import OurStory from './pages/OurStory';
import WeddingCelebrations from './pages/WeddingCelebrations';
import Collections from './pages/Collections';



function App() {
  return (
    <>
    <AnnouncementBar/>      
    <NavBar/>  
    <Routes>
      <Route exact path='/'element={<Home/>} />
      <Route path='/our-story'element={<OurStory/>} />
      <Route path='/what-we-have'element={<WhatWeHave/>} />
      <Route path='wedding-celebrations'element={<WeddingCelebrations/>} />
      <Route path='/collections'element={<Collections/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
