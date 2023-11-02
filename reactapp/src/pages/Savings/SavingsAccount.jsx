import React from 'react';
import HouseFund from './HouseFund';
import SavingsGoalItem from './SavingsGoalItem';
import '../../styles/Savings/Savings.css';

const SavingsAccount = () => {
    return (
        <div className='savings-account'>
            <div className='flex space-between mb-75'>
                <div>
                    <p className='h4 fw-600 mb-75'>Savings Goals</p>
                    <div className='balance-item flex align-center space-between mb-10'>
                        <p className='text fw-500'>Current Balance</p>
                        <p className='h4 fw-700 purple'>$2,000</p>
                    </div>
                    <div className='balance-item flex align-center space-between'>
                        <p className='text fw-500'>Average Deposit Per Month</p>
                        <p className='h4 fw-700 purple'>$600</p>
                    </div>
                </div>

                <div>
                    <ul className='action-list'>
                        <li><a className='btn-action' href="#">Add Goal</a></li>
                        <li><a className='btn-action' href="#">Deposit</a></li>
                        <li><a className='btn-action' href="#">Transfer</a></li>
                        <li><a className='btn-action' href="#">Move $ To Another Goal</a></li>
                        <li><a className='btn-action' href="#">Purchase Item</a></li>
                        <li><a className='btn-action' href="#">Manage Savings Split</a></li>
                    </ul>
                </div>
            </div>

            <div className='flex space-between'>
                <div>
                    <p className='text fw-700 mb-10'>Savings Goals</p>
                    <div>
                        <SavingsGoalItem />
                        <SavingsGoalItem />
                        <SavingsGoalItem />
                    </div>
                </div>

                <div>
                    <p className='text fw-700 mb-10'>House Fund</p>
                    <HouseFund />
                </div>

            </div>
        </div>
    )
}

export default SavingsAccount;


