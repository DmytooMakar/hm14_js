import React from 'react';
import './App.css';
import Currencies from './components/Currencies';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<div className='background'>
    <h1>Currencies</h1>
    <Currencies />
    </div>
  );
}

export default App;
