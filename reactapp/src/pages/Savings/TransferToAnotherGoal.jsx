import React, { useState } from 'react';
import SmallFormWrapper from '../../components/Cards/SmallFormWrapper';
import '../../styles/Cards/SmallFormWrapper.css';

const TransferToAnotherGoal = (props) => {
    const [sliderValue1, setSliderValue1] = useState(0);
    const [sliderValue2, setSliderValue2] = useState(0);

    const handleSliderChange1 = (event) => {
        setSliderValue1(event.target.value);
    }

    const handleSliderChange2 = (event) => {
        setSliderValue2(event.target.value);
    }

    return (
        <SmallFormWrapper>
            <p className='h4 fw-600 mb-50'>Transfer To Another Goal</p>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>Amount</label>
                <input className='input-form' type={Text}></input>
            </div>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>Select Goals To Withdraw From</label>
                <select className='select__multiple' multiple>
                    <option className='option__multiple'>Tattoo</option>
                    <option className='option__multiple' selected>Painting</option>
                    <option className='option__multiple'>Watch</option>
                    <option className='option__multiple' selected>Headphone</option>
                </select>
            </div>
            <div className='mb-20 flex flex-column'>
                <label className='label-form'>Select Target Goal</label>
                <select className='select__single'>
                    <option className='option__single'>Tattoo</option>
                    <option className='option__single'>Painting</option>
                    <option className='option__single'>Watch</option>
                    <option className='option__single'>Headphones</option>
                </select>
            </div>
            <div className='mb-50'>
                <label className='label-form'>Select Amount</label>
                <div className='flex space-between mb-20'>
                    <p className='text'>Painting</p>
                    <div className='flex'>
                        <input className='input__range' type='range' min='0' max='100' value={sliderValue1} onChange={handleSliderChange1} />
                        <p className='pl-10 fw-600 text'>${sliderValue1}</p>
                    </div>
                </div>
                <div className='flex space-between'>
                    <p className='text'>Headphones</p>
                    <div className='flex'>
                        <input className='input__range' type='range' min='0' max='100' value={sliderValue2} onChange={handleSliderChange2} />
                        <p className='pl-10 fw-600 text'>${sliderValue2}</p>
                    </div>
                </div>
            </div>
            <button className='btn-primary mb-20'>Save</button>
            <button className='btn-secondary'>Cancel</button>
        </SmallFormWrapper>
    );
}

export default TransferToAnotherGoal;