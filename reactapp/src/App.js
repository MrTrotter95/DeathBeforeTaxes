import React from 'react';
import Accounts from './pages/Accounts/Accounts';
import imgGrim from './assets/images/grim.svg';
import SavingsAccount from './pages/Savings/SavingsAccount';
import AddGoal from './pages/Savings/AddGoal';
import Deposit from './pages/Savings/Deposit';
import TransferOut from './pages/Savings/TransferOut';
import TransferToAnotherGoal from './pages/Savings/TransferToAnotherGoal';
import PurchaseItem from './pages/Savings/PurchaseItem';
import AddExpense from './pages/Expenses/AddExpense';
import AddCategory from './pages/Expenses/AddCategory';
import OneOffPayment from './pages/Expenses/OneOffPayment';
import ExpenseAccount from './pages/Expenses/ExpenseAccount';

const App = () => {
    return (
        <div className='parent-container'>
            <div class='flex align-center justify-center'>
                <p className='h1 fw-700'>DEATH before taxes</p>
                <img src={imgGrim} alt='money icon' className='hero-img' />
            </div>
            <Accounts />
            <div className='mt-100 mb-100'>
                <SavingsAccount />
            </div>
            <div className='mt-100 mb-100 flex gap-30'>
                <AddGoal />
                <Deposit />
                <TransferOut />
                <TransferToAnotherGoal />
                <PurchaseItem />
            </div>
            <div className='mt-100 mb-100'>
                <ExpenseAccount />
            </div>
            <div className='mt-100 mb-100 flex gap-30'>
                <AddExpense />
                <AddCategory />
                <OneOffPayment />
            </div>
        </div>
    )
}

export default App;