//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import './Components/Card/card.css'
import './Components/Card/expenses.css'
import Button from './Components/Button/Button.jsx';
import Filter from './Components/Filter/Filter.jsx';
import Diagram from './Components/Diagram/Diagram.jsx';
import Card from './Components/Card/Card.jsx';
import Loader from './Components/Loader/Loader.jsx';
import db from './firebase.config.js';

function App() {

  //const firebaseApp = firebase.apps[0];

  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 3, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ]);

  const [isLoading, setIsLoading] = useState(false)
  const fetchExpenses=async()=>{
    setIsLoading(true);
    const response=db.collection('Expenses');
    const data=await response.get();
    data.docs.forEach(item=>{
      setExpenses([...expenses, item.data()]
      );
    })
    setIsLoading(false);
  }
  useEffect(() => {
    fetchExpenses();
  }, [])


  const addItem = (name, amount, date) => {
    const newItem = {
      id: Math.random().toString(),
      title: name,
      amount: amount,
      date: new Date(date),
    };
    setExpenses(
      [
        ...expenses,
        newItem
      ]
    );
  }

  const [filteredExpenses, setFilteredList] = useState([{}]);
  const [selectedYear, setYear] = useState(new Date().getFullYear());
  const sortItems = (year) => {
    const selectedYear = parseInt(year);
    const filteredList = expenses.filter(item => item.date.getFullYear() === selectedYear);
    //filteredList.date.getMonth().sort(/*a.date.getMonth(), b.date.getMonth()*/);
    setFilteredList(filteredList);
    setYear(year);
  }

  return (
    <div className="App">
      
      <h2>My Expenses tempalte</h2>
      {isLoading && <Loader />}
      {!isLoading && <Button handleSubmit={addItem}/>}
      <div className="card expenses">
        {!isLoading && <Filter sortExpenses={sortItems} expensesList={expenses}/>}
        {!isLoading && <Diagram expenseItems={expenses} yearToDisplay={selectedYear}/>}
        {!isLoading && <Card expenseItems={filteredExpenses}/>}
      </div>
    </div>
  );
}

export default App;
/*<code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>*/
//<Card expenseItems={filteredExpenses}/>