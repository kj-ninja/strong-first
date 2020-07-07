import React from 'react';
import {withRouter} from 'react-router-dom';
import './BigSixIcons.scss';
import push from '../../../assets/icons/push.svg';
import pull from '../../../assets/icons/pull.svg';
import squat from '../../../assets/icons/squat.svg';
import bridge from '../../../assets/icons/bridge.png';
import situp from '../../../assets/icons/situp.png';
import hand from '../../../assets/icons/hand.png';

const BigSixIcons = (props) => {
    return (
        <section className="big-six__icons">
            <div className="big-six__icons-container">
                <div onClick={()=>props.history.push('/big-six/push-ups')}
                     className="big-six_icon">
                    <img src={push} alt="push-ups-logo" id="push-ups"/>
                </div>
                <div onClick={()=>props.history.push('/big-six/squats')}
                     className="big-six_icon">
                    <img src={squat} alt="squats-logo" id="squats"/>
                </div>
                <div onClick={()=>props.history.push('/big-six/pull-ups')}
                     className="big-six_icon">
                    <img src={pull} alt="pull-ups-logo" id="pull-ups"/>
                </div>
                <div onClick={()=>props.history.push('/big-six/sit-ups')}
                     className="big-six_icon">
                    <img src={situp} alt="sit-ups-logo" id="sit-ups"/>
                </div>
                <div onClick={()=>props.history.push('/big-six/bridge')}
                     className="big-six_icon">
                    <img src={bridge} alt="bridge-logo" id="bridge"/>
                </div>
                <div onClick={()=>props.history.push('/big-six/hand-stand')}
                     className="big-six_icon">
                    <img src={hand} alt="hand-stand-logo" id="hand-stand"/>
                </div>
            </div>
        </section>
    );
};

export default withRouter(BigSixIcons);