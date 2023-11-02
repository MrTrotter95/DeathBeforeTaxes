import React from 'react';
import AccountInformation from './AccountInformation';

const data = {
    "account": [
        {
            "key": 1,
            "name": "Income Account",
            "accountType": 1,
            "total": "$10,500"
        },
        {
            "key": 2,
            "name": "Expense Account",
            "accountType": 2,
            "total": "$650"
        },
        {
            "key": 3,
            "name": "Savings Account",
            "accountType": 3,
            "total": "$890"
        }
    ]
}

const Accounts = () => {
    return (
        <div className='container'>
            <p className='h1 fw-700 mb-60 mt-150'>Accounts</p>
            <div className='flex wrap gap-30'>
                {data.account.map(account => <AccountInformation account={account} />)}
            </div>
        </div>
        
    )
}

export default Accounts;


