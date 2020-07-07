import React, {useState} from 'react';
import {connect} from 'react-redux';
import '../Exercises.scss';
import Pagination from "../../Pagination/Pagination";

const Exercise = ({bigSix, exercise}) => {
    const [active, setActive] = useState(0);
    let exerciseNumber = 0;
    let url = 'https://coderaf-strong-first-images.s3.eu-west-3.amazonaws.com/push-up.jpg';

    switch (exercise) {
        case 'push-ups':
            exerciseNumber = 0;
            url = 'https://coderaf-strong-first-images.s3.eu-west-3.amazonaws.com/push-up.jpg';
            break;
        case 'squats':
            exerciseNumber = 1;
            url = 'https://coderaf-strong-first-images.s3.eu-west-3.amazonaws.com/squats.jpg';
            break;
        case 'pull-ups':
            exerciseNumber = 2;
            url = 'https://coderaf-strong-first-images.s3.eu-west-3.amazonaws.com/pull-ups.jpg';
            break;
        case 'sit-ups':
            exerciseNumber = 3;
            url = 'https://coderaf-strong-first-images.s3.eu-west-3.amazonaws.com/sit-ups.jpg';
            break;
        case 'bridge':
            exerciseNumber = 4;
            url = 'https://coderaf-strong-first-images.s3.eu-west-3.amazonaws.com/bridge.jpg';
            break;
        case 'hand-stand':
            exerciseNumber = 5;
            url = 'https://coderaf-strong-first-images.s3.eu-west-3.amazonaws.com/hand-stand.jpg';
            break;
        default:
            console.log('Brak ćwiczenia');
    }

    return (
        <section className="exercises">
            <div className="exercises__header">
                <h3>Krok {bigSix.workouts[exerciseNumber].steps[active].stepNumber}</h3>
                <h2>{bigSix.workouts[exerciseNumber].steps[active].stepName}</h2>
            </div>
            <div className="exercises__images">
                <div className="exercises__image" style={{backgroundImage: `url(${url})`}}/>
                <div className="exercises__image" style={{backgroundImage: `url(${url})`}}/>
            </div>
            <div className="exercises__goals-container">
                <h3 className="exercises__goals-title">Cele treningowe:</h3>
                <ul className="exercises__goals-list">
                    <li><span>Próg początkowy:</span> {bigSix.workouts[exerciseNumber].steps[active].stages.beginner}
                    </li>
                    <li><span>Próg
                        średniozaawansowany:</span> {bigSix.workouts[exerciseNumber].steps[active].stages.intermediate}
                    </li>
                    <li>{active === 9 ? <span>Próg mistrzowski:</span> :
                        <span>Próg przejścia:</span>} {bigSix.workouts[exerciseNumber].steps[active].stages.expert}</li>
                </ul>
            </div>
            <Pagination active={active} setActive={setActive} bigSix={bigSix} exerciseNumber={exerciseNumber}/>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        bigSix: state.bigSix.bigSix
    }
};

export default connect(mapStateToProps)(Exercise);