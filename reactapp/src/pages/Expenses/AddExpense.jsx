import React from 'react';
import SmallFormWrapper from '../../components/Cards/SmallFormWrapper';
import '../../styles/Cards/SmallFormWrapper.css';


const AddExpense = (props) => {
    return (
        <SmallFormWrapper>
            <p className='h4 fw-600 mb-50'>Add Expense</p>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>Name</label>
                <input className='input-form' type={Text}></input>
            </div>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>Amount</label>
                <input className='input-form' type={Text}></input>
            </div>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>Frequency</label>
                <select className='select__single'>
                    <option className='option__single' selected>One off payment</option>
                    <option className='option__single'>Weekly</option>
                    <option className='option__single'>Fortnightly</option>
                    <option className='option__single'>Monthly</option>
                </select>
            </div>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>Start Date</label>
                <input className='input-form' type={Date}></input>
            </div>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>Category</label>
                <select className='select__single'>
                    <option className='option__single' selected>Utility</option>
                    <option className='option__single'>Rent</option>
                    <option className='option__single'>Memberships/Subscriptions</option>
                </select>
            </div>
            <button className='btn-primary mb-20'>Save</button>
            <button className='btn-secondary'>Cancel</button>
        </SmallFormWrapper>
    );
}

export default AddExpense;