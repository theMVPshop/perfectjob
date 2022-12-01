import React from 'react';
import Navigation from "./components/Navigation"
import SearchBar from "./components/SearchBar"
import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

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
        <SearchBar />
        <Router />

      </BrowserRouter>
      <footer>
      <BottomBar />
      </footer>
    </div>
    
    );
  }

export default App;