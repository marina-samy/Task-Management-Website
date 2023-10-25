// import logo from './logo.svg';
import './App.css';
import DarkMode from './components/DarkMode/DarkMode';
import Clock from './components/Clock/Clock';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';
import Sidebar from './components/Sidebar/Sidebar';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Today from './Pages/Today';
import Important from './Pages/Important';
import Week from './Pages/Week';
import Personal from './Pages/Personal';
import Birthday from './Pages/Birthday';
import Deadline from './Pages/Deadline';
import Fitness from './Pages/Fitness';
import Learning from './Pages/Learning';
import Work from './Pages/Work';
import Other from './Pages/Other';
import React, { useEffect, useState } from 'react';
import Welcome from './components/WelcomeAlret/Welcome';


function App() {

  const [selectedCategory, setSelectedCategory] = useState('');


    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      console.log(category)
    };
  



  return (
    <div className="App">

    <Welcome />

    <div className="cover">
    <Sidebar handleCategoryClick={handleCategoryClick} />
      <Clock />
      <DarkMode />
    </div>

    <Form selectedCategory={selectedCategory} />

    <Routes>

    <Route path='/' element={<Today selectedCategory={selectedCategory} />}></Route>
    <Route path='/Imp' element={<Important selectedCategory={selectedCategory}  />}></Route>
    <Route path='/week' element={<Week selectedCategory={selectedCategory}  />}></Route>
    <Route path='/personal' element={<Personal selectedCategory={selectedCategory} />}></Route>
    <Route path='/deadline' element={<Deadline selectedCategory={selectedCategory} />}></Route>
    <Route path='/birthday' element={<Birthday selectedCategory={selectedCategory} />}></Route>
    <Route path='/other' element={<Other selectedCategory={selectedCategory} />}></Route>
    <Route path='/learning' element={<Learning selectedCategory={selectedCategory} />}></Route>
    <Route path='/work' element={<Work selectedCategory={selectedCategory} />}></Route>
    
    </Routes>


    </div>
  );
}

export default App;
