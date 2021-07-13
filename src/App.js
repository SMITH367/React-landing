import React from 'react'
import './App.css';
import {Header} from './components/Header'
import {Hero} from './components/Hero'
import {SectionMain} from './components/SectionMain'


function App() {
  
  return (
    <div className="App">
      <div className="container">
        <h2 class="center">SOMOS MAKE LANDING PAGES</h2>
        <Header></Header>
        <Hero/>
        <SectionMain className=""/>
      
    

      </div>
     
    </div>
  );
}

export default App;
