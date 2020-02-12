import React from 'react';
import './App.css';
import UserPage from './UserPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>User List</h3>
      </header>
        <div>
            <UserPage />
        </div>
    </div>
  );
}

export default App;
