import ExpenseItem from './Components/ExpenseItem';

import './App.css'


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
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[4].date}
        title={expenses[4].title}
        amount={expenses[4].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[5].date}
        title={expenses[5].title}
        amount={expenses[5].amount}>
      </ExpenseItem>

    </div>
  );

}
  export default App;