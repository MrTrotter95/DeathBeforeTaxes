import React from 'react';
import Accounts from './pages/Accounts/Accounts';
import imgGrim from './assets/images/grim.svg';
import SavingsAccount from './pages/Savings/SavingsAccount';
import AddGoal from './pages/Savings/AddGoal';

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
            <div className='mt-100 mb-100'>
                <AddGoal />
            </div>
        </div>
    )
}

export default App;