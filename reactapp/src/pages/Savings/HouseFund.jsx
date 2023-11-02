import React from 'react';
import '../../styles/Savings/HouseFund.css';

const HouseFund = () => {
    return (
        <div className='house-fund__container'>
            <div>
                <ul className='flex flex-end mb-30'>
                    <li><a className='btn-action mr-20' href="#">Deposit/Withdraw</a></li>
                    <li><a className='btn-action' href="#">Edit</a></li>
                </ul>
                <div className='house-fund__base-bar mb-25'>
                    <div className='house-fund__percent'></div>
                </div>
                <div className='flex align-center mb-15'>
                    <p className='small-text fw-600 mr-10'>Average Per Week:</p>
                    <p className='small-text fw-700 purple'>$50</p>
                </div>
                <div className='flex align-center mb-50'>
                    <p className='small-text fw-600 mr-10'>Estimate To Reach Goal: </p>
                    <p className='small-text fw-700 purple'>50 Weeks</p>
                </div>

                <div className='flex'>
                    <div className='mr-50'>
                        <p className='small-text fw-600'>Current</p>
                        <p className='h3 fw-700 ml-15'>$3,467</p>
                    </div>
                    <div>
                        <p className='small-text fw-600'>Goal</p>
                        <p className='h3 fw-700 ml-15'>$10,000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HouseFund;


