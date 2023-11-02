import React from 'react';
import '../../styles/Cards/SmallFormWrapper.css';

const SmallFormWrapper = (props) => {
    return (
        <div className='small-form-wrapper'>
            {props.children}
        </div>
    );
}

export default SmallFormWrapper;