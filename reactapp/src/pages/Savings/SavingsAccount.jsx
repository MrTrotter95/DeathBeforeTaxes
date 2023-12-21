import React, { useEffect, useState } from 'react';
import { useGetData } from '../../services/api';
import '../../styles/Savings/Savings.css';
import HouseFund from './HouseFund';
import SavingsGoalItem from './SavingsGoalItem';

const SavingsAccount = () => {
    const [account, setAccount] = useState();

    const { data, isLoading, isError } = useGetData('account', 'SavingsAccounts/1');

    //Hook to return updated account and update the view once changes are made.
    useEffect(() => {
        if (data) {
            setAccount(data);
            console.log("after setAccount()");
        }
    }, [data]);


    //While query is retreiving information user with see Loading text.
    if (isLoading) return 'Loading...'

    //If Query is error user will see the appropriate error message.
    if (isError) return 'An error has occurred: ' + isError.message

    if (!account) return 'Waiting to Account Information to be set'

    return (
        <div className='savings-account'>
            <div className='flex space-between mb-75'>
                <div>
                    <p className='h4 fw-600 mb-75'>{account.name}</p>
                    <div className='balance-item flex align-center space-between mb-10'>
                        <p className='text fw-500'>Current Balance</p>
                        <p className='h4 fw-700 purple'>{account.TotalAmount}</p>
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


