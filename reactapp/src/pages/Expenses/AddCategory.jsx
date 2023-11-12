import React from 'react';
import SmallFormWrapper from '../../components/Cards/SmallFormWrapper';
import '../../styles/Cards/SmallFormWrapper.css';

const AddCategory = (props) => {
    return (
        <SmallFormWrapper>
            <p className='h4 fw-600 mb-50'>Add Expense</p>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>Name</label>
                <input className='input-form' type={Text}></input>
            </div>
            <button className='btn-primary mb-20'>Save</button>
            <button className='btn-secondary'>Cancel</button>
        </SmallFormWrapper>
    );
}

export default AddCategory;