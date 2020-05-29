import React from 'react';
import './BigSixIcons.scss';
import push from '../../../assets/push.svg';
import pull from '../../../assets/pull.svg';
import squat from '../../../assets/squat.svg';
import bridge from '../../../assets/bridge.png';
import situp from '../../../assets/situp.png';
import hand from '../../../assets/hand.png';

const BigSixIcons = ({handleClickPushUps}) => {
    return (
        <section className="big-six__icons">
            <div className="big-six__icons-container">
                <div onClick={handleClickPushUps}
                     className="big-six_icon">
                    <img src={push} alt=""/>
                </div>
                <div className="big-six_icon">
                    <img src={squat} alt=""/>
                </div>
                <div className="big-six_icon">
                    <img src={pull} alt=""/>
                </div>
                <div className="big-six_icon">
                    <img src={situp} alt=""/>
                </div>
                <div className="big-six_icon">
                    <img src={bridge} alt=""/>
                </div>
                <div className="big-six_icon">
                    <img src={hand} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default BigSixIcons;