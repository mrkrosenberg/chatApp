import React from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.scss';

// Components
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChatRoom />
      </header>
    </div>
  );
}

export default App;
