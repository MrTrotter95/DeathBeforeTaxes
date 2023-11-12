import React, { useState } from 'react';
import SmallFormWrapper from '../../components/Cards/SmallFormWrapper';
import '../../styles/Cards/SmallFormWrapper.css';

const PurchaseItem = (props) => {
    return (
        <SmallFormWrapper>
            <p className='h4 fw-600 mb-50'>TransferToAnotherGoal</p>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>What Did You Buy?</label>
                <select className='select__single'>
                    <option className='option__single' selected>Tattoo</option>
                    <option className='option__single'>Painting</option>
                    <option className='option__single'>Watch</option>
                    <option className='option__single'>Headphones</option>
                </select>
            </div>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>Select Goals For Remaining Amount</label>
                <select className='select__multiple' multiple>
                    <option className='option__multiple'>Tattoo</option>
                    <option className='option__multiple' selected>Painting</option>
                    <option className='option__multiple'>Watch</option>
                    <option className='option__multiple' selected>Headphone</option>
                </select>
            </div>

            <button className='btn-primary mb-20'>Save</button>
            <button className='btn-secondary'>Cancel</button>
        </SmallFormWrapper>
    );
}

export default PurchaseItem;