import React, { useState } from 'react';
import Wrapper from '../../components/Cards/AccountWrapper';
import imgMoneySmall from '../../assets/images/money-small.svg';
import imgMoneyLarge from '../../assets/images/money-large.svg';
import imgDevilSmall from '../../assets/images/devil-small.svg';
import imgDevilLarge from '../../assets/images/devil-large.svg';
import imgPiggySmall from '../../assets/images/piggy-small.svg';
import imgPiggyLarge from '../../assets/images/piggy-large.svg';

const AccountInformation = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const displayImage = (type) => {
        switch (type) {
            case 1:
                return imgMoneySmall;
            case 2:
                return imgDevilSmall;
            case 3:
                return imgPiggySmall;
            default:
                return null;
        };
    };

    const displayHoverImage = (type) => {
        switch (type) {
            case 1:
                return imgMoneyLarge;
            case 2:
                return imgDevilLarge;
            case 3:
                return imgPiggyLarge;
            default:
                return null;
        };
    }

    return (
        <Wrapper>
            <div className='flex justify-center height-100' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='account__container slide-left mt-60'>
                    <p className='h4 fw-700 '>{props.account.name}</p>
                    <div className='flex flex-end'>
                        <img src={displayImage(props.account.accountType)} alt='money icon' className='mt-40 account-img' />
                    </div>

                    <div>
                        <p className='h4 fw-900'>Total</p>
                        <p className='h2 fw-700 purple hover-white'>{props.account.total}</p>
                    </div>
                </div>
                <img src={displayHoverImage(props.account.accountType)} alt='money icon' className={`mt-40 js-animate-acc-img ${isHovered ? 'hovered' : ''}`} />
            </div>
        </Wrapper>
    );
}

export default AccountInformation;