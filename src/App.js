import React from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.scss';

// Components
import ChatRoom from './components/ChatRoom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <ChatRoom />
      </header>
    </div>
  );
}

export default App;
