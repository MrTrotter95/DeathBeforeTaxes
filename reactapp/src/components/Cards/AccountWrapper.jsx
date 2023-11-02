import React from 'react';
import '../../styles/Accounts/AccountWrapper.css';

const AccountWrapper = (props) => {
    return (
        <div className='account-wrapper image-container'>
            {props.children}
        </div>
  );
}

export default AccountWrapper;