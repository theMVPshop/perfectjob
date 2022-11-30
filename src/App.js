import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navigation from "./components/Navigation"
import BottomBar from "./components/BottomBar"
import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div style={{backgroundColor: "#F3F4F6"}}>
      <BrowserRouter >
        <Navigation />
        <BottomBar />
        <Router />
      </BrowserRouter>
    </div>
    );
  }

export default App;