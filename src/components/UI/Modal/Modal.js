import React from 'react';
import './Modal.scss';
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {

    return (
        <>
            <Backdrop show={props.show} cancel={props.cancelPurchase}/>
            <div className="modal"
                 style={{
                     transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity: props.show ? '1' : '0'
                 }}>
                {props.children}
            </div>
        </>
    );
};

export default React.memo(Modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);