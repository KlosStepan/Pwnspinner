import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Pwnspinner } from './lib/components/Pwnspinner';
function App() {
  return (
    <>
      <Pwnspinner />
      <Pwnspinner color="red" />
      <Pwnspinner color="green" speed={1.9} />
      <Pwnspinner color="orange" thickness={10} />
      <Pwnspinner color="blue" speed={0.7} thickness={2} />
    </>
  )
}

export default App;
