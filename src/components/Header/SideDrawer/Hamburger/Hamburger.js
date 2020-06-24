import React from 'react';
import './Hamburger.scss';

const Hamburger = (props) => {
    return (
        <div className='drawer-toggle' onClick={props.show}>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default Hamburger;