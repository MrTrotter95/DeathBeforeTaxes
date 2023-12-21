import React, { useEffect, useState } from 'react';
import { useGetData } from '../../services/api';
import { ExpenseAccountModel } from '../../models/models';

const ExpenseAccount = () => {
    const [expenseAccount, setExpenseAccount] = useState <ExpenseAccountModel | null> (null);


    const { data, isLoading, isError } = useGetData('expenseAccount', 'ExpenseAccounts/1');




    //Hook to return updated account and update the view once changes are made.
    useEffect(() => {
        if (data) {
            setExpenseAccount({
                ID: data.id,
                Name: data.name,
                TotalAmount: data.totalAmount
            });
        }
    }, [data]);


    //While query is retreiving information user with see Loading text.
    if (isLoading) return 'Loading...'

    //If Query is error user will see the appropriate error message.
    if (isError) return 'An error has occurred: '


    if (!expenseAccount) return 'Waiting to Account Information to be set'

    return (
        <div className='savings-account'>
            <div className='flex space-between mb-75'>
                <div>
                    <p className='h4 fw-600 mb-75'>{expenseAccount.Name}</p>
                    <div className='balance-item flex align-center space-between mb-10'>
                        <p className='text fw-500'>Current Balance</p>
                        <p className='h4 fw-700 purple'>${expenseAccount.TotalAmount}</p>
                    </div>
                    <div className='balance-item flex align-center space-between mb-10'>
                        <p className='text fw-500'>Expenses Each Month</p>
                        <p className='h4 fw-700 purple'>$600</p>
                    </div>
                    <div className='balance-item flex align-center space-between'>
                        <p className='text fw-500'>Average Expenses each week</p>
                        <p className='h4 fw-700 purple'>$120</p>
                    </div>
                </div>
                <div>
                    <ul className='action-list'>
                        <li><a className='btn-action' href="#">Add Expense</a></li>
                        <li><a className='btn-action' href="#">Add Category</a></li>
                        <li><a className='btn-action' href="#">One Of Payment</a></li>
                    </ul>
                </div>
            </div>

            <div className=''>
                <p className='text fw-700 mb-10'>Remainging Expenses This Month</p>
                <div>
                    <table className='table pb-20'>
                        <thead className='thead'>
                            <tr className='tr'>
                                <th className='th text-left small-text pl-20 pt-10 pb-10'>Item</th>
                                <th className='th text-left small-text pt-10 pb-10'>Category</th>
                                <th className='th text-center small-text pt-10 pb-10'>Amount</th>
                                <th className='th text-center small-text pt-10 pb-10'>Due In</th>
                                <th className='th text-center small-text pt-10 pb-10'>Date</th>
                                <th className='th text-center small-text pt-10 pb-10'>Make Payment</th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            <tr className='tr'>
                                <td className='td text-left small-text pl-20 pt-10 pb-10'>Rent</td>
                                <td className='td text-left small-text pt-10 pb-10'>Utility</td>
                                <td className='td text-center small-text pt-10 pb-10'>$600</td>
                                <td className='td text-center small-text pt-10 pb-10'>-</td>
                                <td className='td text-center small-text pt-10 pb-10'>01/01/23</td>
                                <td className='td text-center small-text pt-10 pb-10'><a className='pay-btn'>Pay</a></td>
                            </tr>
                            <tr className='tr'>
                                <td className='td text-left small-text pl-20 pt-10 pb-10'>Electricty</td>
                                <td className='td text-left small-text pt-10 pb-10'>Utility</td>
                                <td className='td text-center small-text pt-10 pb-10'>$110</td>
                                <td className='td text-center small-text pt-10 pb-10'>-</td>
                                <td className='td text-center small-text pt-10 pb-10'>03/01/23</td>
                                <td className='td text-center small-text pt-10 pb-10'><a className='pay-btn'>Pay</a></td>
                            </tr>
                            <tr className='tr'>
                                <td className='td text-left small-text pl-20 pt-10 pb-10'>Internet</td>
                                <td className='td text-left small-text pt-10 pb-10'>Utility</td>
                                <td className='td text-center small-text pt-10 pb-10'>$90</td>
                                <td className='td text-center small-text pt-10 pb-10'>5 days</td>
                                <td className='td text-center small-text pt-10 pb-10'>06/01/23</td>
                                <td className='td text-center small-text pt-10 pb-10'><a className='pay-btn'>Pay</a></td>
                            </tr>
                            <tr className='tr'>
                                <td className='td text-left small-text pl-20 pt-10 pb-10'>Groceries</td>
                                <td className='td text-left small-text pt-10 pb-10'>Food</td>
                                <td className='td text-center small-text pt-10 pb-10'>$110</td>
                                <td className='td text-center small-text pt-10 pb-10'>6 days</td>
                                <td className='td text-center small-text pt-10 pb-10'>07/01/23</td>
                                <td className='td text-center small-text pt-10 pb-10'><a className='pay-btn'>Pay</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExpenseAccount;


