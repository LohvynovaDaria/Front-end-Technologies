//import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Components/card.css';
import './Components/expenseDate.css';
import './Components/expenseItem.css';
import './Components/expenses.css';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const expenseItems = expenses.map(item => (
    <div key={item.id} className="card expense-item">
        <div className="expense-date">
            <div className="expense-date__month">{new Date(item.date).getMonth().toLocaleString("en-US", { month: "long" })}</div>
            <div className="expense-date__year">{new Date(item.date).getFullYear()}</div>
            <div className="expense-date__day">{new Date(item.date).getDay()}</div>
        </div>
        <div className="expense-item__description"><h2>{item.title}</h2>
            <div className="expense-item__price">${item.amount}</div>
        </div>
    </div>
  ));

  return (
    <div className="App">
      <h2>My Expenses tempalte</h2>
      <div className="card expenses">{expenseItems}</div>
    </div>
  );
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
