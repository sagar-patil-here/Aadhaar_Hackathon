import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Landing from './Landing';
import './App.css';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="App">
      {showDashboard ? (
        <Dashboard />
      ) : (
        <Landing onLaunch={() => setShowDashboard(true)} />
      )}
    </div>
  );
}

export default App;
