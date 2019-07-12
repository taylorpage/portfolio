import React from 'react';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Roles from './components/Roles/Roles';
import SideNav from './components/SideNav/SideNav';
import './App.css';

function App() {
  return (
    <div className="App">
      <SideNav></SideNav>
      <Header></Header>
      <About></About>
      <Roles></Roles>
      <Experience></Experience>
    </div>
  );
}

export default App;
