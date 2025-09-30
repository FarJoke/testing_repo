import React from 'react';
//import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReactHooks from './pages/state managers/ReactHooks';
import Redux from './pages/state managers/Redux';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
         <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <Link to="/">Главная</Link>
          <Link to="/about">О проекте</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/statemanagers">
            <Route path="reactHooks" element={<ReactHooks />} />
            <Route path="redux" element={<Redux />} />
          </Route>

          <Route path="*" element={<h1>Страница не найдена</h1>} />
        </Routes>
      </BrowserRouter>*/} 
      Hello world!
    </div>
  );
}

export default App;
