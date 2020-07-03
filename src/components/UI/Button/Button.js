import React from 'react';
import './Button.scss';

const Button = (props) => (
        <button type={props.type} onClick={props.clicked} className={"button " + props.color}>
            {props.children}
        </button>
);

export default Button;