import React from 'react';
import Navigation from "./components/Navigation"
import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div style={{backgroundColor: "#F3F4F6"}}>
      <BrowserRouter >
        <Navigation />
        <Router />
      </BrowserRouter>
    </div>
    );
  }

export default App;
