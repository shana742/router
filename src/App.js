import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Header from './layout/ComonComponet/Header';
import Home  from './layout/Pages/Home';
import About from './layout/Pages/About';
import Contact from './layout/Pages/Contact';
import Blog from './layout/Pages/Blog';

function App() {
  return (
    <div >
     <Header/>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/blog' element={<Blog/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
