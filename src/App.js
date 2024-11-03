import React from 'react';
import { Helmet } from 'react-helmet';
import ConcertLanding from './components/ConcertLanding/ConcertLanding';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>My Concert</title>
      </Helmet>
      <ConcertLanding />
    </div>
  );
}

export default App;
