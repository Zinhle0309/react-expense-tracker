import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpenseForm from './Components/AddExpenseForm';
import Budget from './Components/Budget';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import Remaining from './Components/Remaining';
import { AppProvider } from './Context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='mt-3'>expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;



