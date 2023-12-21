import React from 'react';
import SmallFormWrapper from '../../components/Cards/SmallFormWrapper';
import '../../styles/Cards/SmallFormWrapper.css';


// Setup Post to add a new goal

const AddGoal = (props) => {
    return (
        <SmallFormWrapper>
            <p className='h4 fw-600 mb-50'>Add Goal</p>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>What's your goal</label>
                <input className='input-form' type={Text}></input>
            </div>
            <div className='mb-50 flex flex-column'>
                <label className='label-form'>Money Required</label>
                <input className='input-form' type={Text}></input>
            </div>
            <button className='btn-primary mb-20'>Save</button>
            <button className='btn-secondary'>Cancel</button>
        </SmallFormWrapper>
    );
}

export default AddGoal;