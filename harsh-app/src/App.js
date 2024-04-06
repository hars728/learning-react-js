
import React from 'react';
import './App.css'

import Expenses from './Components/EXPENSES/Expenses';


function App() {
  let expenses = [
    {
      id: 'el',
      title: 'school - Fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {
      id: 'e1',
      title: 'school - Fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {
      id: 'e2',
      title: 'other  - Fee',
      amount: 250,
      date: new Date(2021, 6, 2)
    },
    {
      id: 'e3',
      title: 'house rent',
      amount: 250,
      date: new Date(2021, 8, 10)
    },
    {
      id: 'e4',
      title: 'new - Fee',
      amount: 20,
      date: new Date(2025, 5, 12)
    },
    {
      id: 'e5',
      title: 'domestic- Fee',
      amount: 2000,
      date: new Date(2025, 9, 12)
    }
  ];

  return (

    <div className="container">
      <h2>Let's get started</h2>
      <Expenses item= {expenses} />
    </div>
  );

}
  export default App;