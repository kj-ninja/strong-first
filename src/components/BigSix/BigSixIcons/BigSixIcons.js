import React from 'react';
import './BigSixIcons.scss';
import push from '../../../assets/push.svg';
import pull from '../../../assets/pull.svg';
import squat from '../../../assets/squat.svg';
import bridge from '../../../assets/bridge.png';
import situp from '../../../assets/situp.png';
import hand from '../../../assets/hand.png';

const BigSixIcons = ({handleClickExercise}) => {
    return (
        <section className="big-six__icons">
            <div className="big-six__icons-container">
                <div onClick={(e)=>handleClickExercise(e)}
                     className="big-six_icon">
                    <img src={push} alt="push-ups-logo" id={"push-ups"}/>
                </div>
                <div className="big-six_icon">
                    <img src={squat} alt="squats-logo" id={"squats"}/>
                </div>
                <div className="big-six_icon">
                    <img src={pull} alt="pull-ups-logo" id={"pull-ups"}/>
                </div>
                <div className="big-six_icon">
                    <img src={situp} alt="sit-ups-logo" id={"sit-ups"}/>
                </div>
                <div className="big-six_icon">
                    <img src={bridge} alt="bridge-logo" id={"bridge"}/>
                </div>
                <div className="big-six_icon">
                    <img src={hand} alt="hand-stand-logo" id={"hand-stand"}/>
                </div>
            </div>
        </section>
    );
};

export default BigSixIcons;