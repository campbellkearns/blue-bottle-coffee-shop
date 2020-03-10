import React from 'react';

import './App.css';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
    </div>
  );
}

export default App;
