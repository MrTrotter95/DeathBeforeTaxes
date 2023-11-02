import React from 'react';
import '../../styles/Savings/SavingsGoalItem.css';

const SavingsGoalItem = () => {
    return (
        <div className='savings-goal__container mb-10'>
            <div className='flex space-between mb-10'>
                <p className='small-text fw-700'>Tattoo</p>
                <a className='btn-action' href='#'>Edit</a>
            </div>
            <div className='savings-goal__base-bar mb-10'>
                <div className='savings-goal__percent'></div>
            </div>
            <div className='flex space-between'>
                <div className='flex'>
                    <p className='small-text fw-700 mr-10'>Current:</p>
                    <p className='small-text fw-600 purple'>$750 - 75%</p>
                </div>
                <div className='flex'>
                    <p className='small-text fw-700 mr-10'>Goal:</p>
                    <p className='small-text fw-600 purple'>$1000</p>
                </div>
            </div>
        </div>
    )
}

export default SavingsGoalItem;


