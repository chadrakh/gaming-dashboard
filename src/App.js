import React from 'react';
import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';
import Home from './components/Home';

const App = () => {
  const username = 'User';

  return (
    <div>
      <Navigation 
        username={username} 
      />
      <Toolbar />
      <Home 
        username={username}
      />
    </div>
  )
}

export default App;