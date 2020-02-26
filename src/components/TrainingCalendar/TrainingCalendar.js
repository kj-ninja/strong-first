import React, {useState} from 'react';
import './TrainingCalendar.scss';


const TrainingCalendar = () => {
    return (

        <div className="container">
            <div className="row">
                <Day day={1}/>
                <Day day={2}/>
                <Day day={3}/>
                <Day day={4}/>
                <Day day={5}/>
                <Day day={6}/>
                <Day day={7}/>
            </div>
            <div className="row">
                <Day day={8}/>
                <Day day={8}/>
                <Day day={10}/>
                <Day day={11}/>
                <Day day={12}/>
                <Day day={13}/>
                <Day day={14}/>
            </div>
            <div className="row">
                <Day day={15}/>
                <Day day={16}/>
                <Day day={17}/>
                <Day day={18}/>
                <Day day={19}/>
                <Day day={20}/>
                <Day day={21}/>
            </div>
            <div className="row">
                <Day day={22}/>
                <Day day={23}/>
                <Day day={24}/>
                <Day day={25}/>
                <Day day={26}/>
                <Day day={27}/>
                <Day day={28}/>
            </div>
            <div className="row">
                <Day day={29}/>
                <Day day={30}/>
                <Day day={31}/>
                <Day day={''}/>
                <Day day={''}/>
                <Day day={''}/>
                <Day day={''}/>
            </div>
        </div>
    );
};

const Day = (props) => {

    return (
        <div className="col">
            {props.day}
        </div>
    )
};

export default TrainingCalendar;