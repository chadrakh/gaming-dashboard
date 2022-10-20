import React from 'react';
import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Navigation />
      <Toolbar />
      <Home />
    </div>
  )
}

export default App;